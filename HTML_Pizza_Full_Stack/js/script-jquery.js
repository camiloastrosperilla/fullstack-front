
$(document).ready(function () {
	$('#formulario01').submit(function (e) {
		e.preventDefault();
		$("#nombre, #apellido").each(function () {
			if ($.trim(this.value) == "") {
				$('#nombre').addClass('rojo');
				$('#apellido').addClass('rojo');
			}
			else {
				$('#formulario01').unbind('submit').submit();
			}
		});
	});
});
