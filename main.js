/**
 * Descrizione:
Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
Servendoci di handlebars stampiamo tutto a schermo.
In questo momento non è importante la parte grafica.
Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.
 */
$(document).ready(function () {
	var container = $('.cds-container');
	var source = $("#entry-template").html();
	var template = Handlebars.compile(source);

	$.ajax({
		type: "GET",
		url: "https://flynn.boolean.careers/exercises/api/array/music",
		success: function (data) {
			var cd = data.response;
			for (var i = 0; i < cd.length; i++) {
				var element = cd[i];


				var info = {
					imgSrc: element.poster,
					title: element.title,
					subtitle: element.author,
					yearCd: element.year,
					genres: element.genre.toLowerCase()
				}

				var html = template(info);
				container.append(html);

			}
		},
		error: function () {
			console.error('ERROR');
		}
	});// END AJAX
	$('#genres').change(function () {
		console.log($(this).val());
		
	var genre = $(this).val();
	if (genre === 'all') {
		$('.cd').show();
	} else {
		$('.cd').hide();
		$('.cd.' + genre).show();
	}
}); // END CHANGE*/
}); //END DOC READY