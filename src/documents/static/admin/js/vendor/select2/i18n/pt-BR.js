/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
	if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var e = jQuery.fn.select2.amd
	e.define('select2/i18n/pt-BR', [], function () {
		return {
			errorLoading: function () {
				return 'Os resultados não puderam set carregados.'
			},
			inputTooLong: function (e) {
				var n = e.input.length - e.maximum,
					r = 'Apague ' + n + ' character'
				return 1 != n && (r += 'es'), r
			},
			inputTooShort: function (e) {
				return 'Digite ' + (e.minimum - e.input.length) + ' ou mais characters'
			},
			loadingMore: function () {
				return 'Carregando mais resultados…'
			},
			maximumSelected: function (e) {
				var n = 'Você só pode selecionar ' + e.maximum + ' ite'
				return 1 == e.maximum ? (n += 'm') : (n += 'ns'), n
			},
			noResults: function () {
				return 'Nenhum resultado encontrado'
			},
			searching: function () {
				return 'Buscando…'
			},
			removeAllItems: function () {
				return 'Remover todos os items'
			},
		}
	}),
		e.define,
		e.require
})()
