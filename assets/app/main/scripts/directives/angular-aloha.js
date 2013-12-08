'use strict';

// declare a new module, and inject the $compileProvider
angular.module('compile', [], function ($compileProvider) {

    // configure new 'compile' directive by passing a directive
    // factory function. The factory function injects the '$compile'
    $compileProvider.directive('compile', function ($compile) {
        // directive factory creates a link function
        return function (scope, element, attrs) {
            scope.$watch(
              function (scope) {
                  // watch the 'compile' expression for changes
                  return scope.$eval(attrs.compile);
              },
              function (value) {
                  // when the 'compile' expression changes
                  // assign it into the current DOM
                  element.html(value);

                  // compile the new DOM and link it to the current
                  // scope.
                  // NOTE: we only compile .childNodes so that
                  // we don't get into infinite loop compiling ourselves
                  $compile(element.contents())(scope);
              }
            );
        };
    })
});

angular.module('contenteditable', []).directive('contenteditable', ['$timeout', function ($timeout) {
      return {
          restrict: 'A',
          require: '?ngModel',
          link: function ($scope, $element, attrs, ngModel) {
              // don't do anything unless this is actually bound to a model
              if (!ngModel) {
                  return
              }

              // view -> model
              $element.bind('input', function (e) {
                  $scope.$apply(function () {
                      var html, html2, rerender
                      html = $element.html()
                      rerender = false
                      if (attrs.stripBr && attrs.stripBr !== "false") {
                          html = html.replace(/<br>$/, '')
                      }
                      if (attrs.noLineBreaks && attrs.noLineBreaks !== "false") {
                          html2 = html.replace(/<div>/g, '').replace(/<br>/g, '').replace(/<\/div>/g, '')
                          if (html2 !== html) {
                              rerender = true
                              html = html2
                          }
                      }
                      ngModel.$setViewValue(html)
                      if (rerender) {
                          ngModel.$render()
                      }
                      if (html === '') {
                          // the cursor disappears if the contents is empty
                          // so we need to refocus
                          $timeout(function () {
                              $element.blur()
                              $element.focus()
                          })
                      }
                  })
              })

              // model -> view
              var oldRender = ngModel.$render
              ngModel.$render = function () {
                  var el, el2, range, sel
                  if (!!oldRender) {
                      oldRender()
                  }
                  $element.html(ngModel.$viewValue || '')
                  el = $element.get(0)
                  range = document.createRange()
                  sel = window.getSelection()
                  if (el.childNodes.length > 0) {
                      el2 = el.childNodes[el.childNodes.length - 1]
                      range.setStartAfter(el2)
                  } else {
                      range.setStartAfter(el)
                  }
                  range.collapse(true)
                  sel.removeAllRanges()
                  sel.addRange(range)
              }
              if (attrs.selectNonEditable && attrs.selectNonEditable !== "false") {
                  $element.click(function (e) {
                      var range, sel, target
                      target = e.toElement
                      if (target !== this && angular.element(target).attr('contenteditable') === 'false') {
                          range = document.createRange()
                          sel = window.getSelection()
                          range.setStartBefore(target)
                          range.setEndAfter(target)
                          sel.removeAllRanges()
                          sel.addRange(range)
                      }
                  })
              }
          }
      }
}])

angular.module('ng').filter('cut', function () {
    return function (value, wordwise, max, tail) {
        if (!value) return '';

        max = parseInt(max, 10);
        if (!max) return value;
        if (value.length <= max) return value;

        value = value.substr(0, max);
        if (wordwise) {
            var lastspace = value.lastIndexOf(' ');
            if (lastspace != -1) {
                value = value.substr(0, lastspace);
            }
        }

        return value + (tail || ' …');
    };
});

angular.module('aloha', []).directive('aloha', ['$location', '$compile', '$http', function ($location, $compile, $http, $rootScope) {
     

	// Because angularjs would route clicks on any links, but we
	// want the user to be able to click on links so he can edit
	// them.
	function preventAngularRouting(elem) {
	    $(elem).click(function (e) {
			return false;
		});
	}

	function replaceAngularLinkClickHandler(elem) {
		preventAngularRouting(elem);
		$(elem).on('click', 'a', function (e) {
			var href = $(this).attr('href');
			// Use metaKey for OSX and ctrlKey for PC.
			if (e.metaKey || e.ctrlKey) {
				if ('/' === href.charAt(0)) {
					// Relative links withing the angular app.
					$location.url(href);
					e.preventDefault();
				} else {
					// Absolute links pointing outside the angular app.
					window.location.href = href;
				}
			}
		});
	}

	// Also, we don't want the default ctrl+click behaviour of aloha,
	// which is to do window.location.href = href because that would
	// reload the page.
	function disableAlohaCtrlClickHandler() {
		Aloha.ready(function () {
			Aloha.bind('aloha-editable-activated', function (event, msg) {
				// There is no simple way to disable Aloha's ctrl-click
				// behaviour. We know the handler is bound when the editable
				// is activated, and with the timeout we make sure it is
				// unbound again afterwards.
				var editable = msg.editable;
				setTimeout(function () {
					editable.obj.unbind('click.aloha-link.meta-click-link');
				}, 10);
			});
		});
	}
    
	// Only do once for each page load.
	disableAlohaCtrlClickHandler();
   

	return {
		// Because we want to ensure that all directives on the element
		// will be honored, but all directives on descendant elements
		// will be considered non-bindable (priority -1000 and terminal
		// true). Necessary because the content may come prefilled from
	    // the server.
	    restrict: "E",
	    priority: -1000,
	    replace: true,	    
        template: "<div></div>",
        link: function ($scope, elem, attrs) {
                      
		    Aloha.ready(function () {
		         
		        $scope.$watch('editEnable', function (isEnable) {
		            if (isEnable)
		                Aloha.jQuery(elem).aloha();
		            else
		                Aloha.jQuery(elem).mahalo();
		        });

		        Aloha.bind('aloha-smart-content-changed', function (jEvent, jData) {
 
		            if (jData.editable.getId() != attrs.id) return;

		            $scope.$emit('Update'+attrs.type, {
		                id: parseInt(jData.editable.getId()),
		                type: attrs.type,
		                content: $('#' + jData.editable.getId()).html()
		            });
                    		           
		        });

                $scope.$on('$destroy', function () {
                    Aloha.jQuery(elem).mahalo();
				});
		    });
		    
		    replaceAngularLinkClickHandler(elem);
		}
	};
}])

angular.module('smoothscroll', []).directive('smoothScroll', [ function () {
      return {
          restrict: 'A',
          link: function (scope, element, attr) {
              return element.bind('click', function () {
                  var offset, speed, target;
                  if (attr.target) {
                      offset = attr.offset || 100;
                      target = $('#' + attr.target);
                      speed = attr.speed || 500;
                      return $('html,body').stop().animate({ scrollTop: target.offset().top - offset }, speed);
                  } else {
                      return $('html,body').stop().animate({ scrollTop: 0 }, speed);
                  }
              });
          }
      };
  }
]);