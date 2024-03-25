/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!(function () {
	if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var n = jQuery.fn.select2.amd
	n.define('select2/i18n/vi', [], function () {
		return {
			inputTooLong: function (n) {
				return 'Vui lòng xóa bớt ' + (n.input.length - n.maximum) + ' ký tự'
			},
			inputTooShort: function (n) {
				return 'Vui lòng nhập thêm từ ' + (n.minimum - n.input.length) + ' ký tự trở lên'
			},
			loadingMore: function () {
				return 'Đang lấy thêm kết quả…'
			},
			maximumSelected: function (n) {
				return 'Chỉ có thể chọn được ' + n.maximum + ' lựa chọn'
			},
			noResults: function () {
				return 'Không tìm thấy kết quả'
			},
			searching: function () {
				return 'Đang tìm…'
			},
			removeAllItems: function () {
				return 'Xóa tất cả các mục'
			},
		}
	}),
		n.define,
		n.require
})()
