
	var loadDevices = function(url){

		// url = $('.content').data('url');

		if(url != "" && url != undefined){
			$('span.trigger-menu').trigger('click');
			$.getJSON( "devices.json", function( data ) {

				$('progress').attr('max',data.length);

				var i = 0;
				// var counter = data.length;
				var timer = setInterval(function(){

						if(i < data.length){
							$('progress').attr('value',i).attr('data-count',"Loading " + i + " of " + (data.length - 1) + " devices");
			
							if(data[i].type == "desktop"){
								$('<iframe id="frame-bg"/>').attr('src',url).addClass(data[i].type + " is-hide").css({'width':data[i].width, 'height': data[i].height}).appendTo('.content');
							}else{
								$('<div class="wrapper-device" id="wrapper-'+i+'">').appendTo('.content');
								$('<span/>').text(data[i].nome + " ("+ data[i].width +"/ " + data[i].height + ")").appendTo('#wrapper-'+i);
								$('<iframe/>').attr('src',url).addClass(data[i].type).css({'width':data[i].width, 'height': data[i].height}).appendTo('#wrapper-'+i);
							}
							i++;
						}else{
							// $('iframe').each(function(){
								// $(this).on('load', function(){
									// counter--;	
	
									// if(counter < 1){
										$('progress').fadeOut(200, function(){
											$('.content').removeClass('loading');

											clearInterval(timer);
											showPortrait();

										});									
									// }
								// });

							// });
						}
				},150);
			});
		}
	};

	var triggerMenu = function(){
		$('span.trigger-menu').on('click', function(){
			$('aside').toggleClass('menu-hide');
		});

		$('aside a').on('click', function(){
			$('aside a').removeClass('active');
			$(this).addClass('active');
			$('aside').addClass('menu-hide');
		});

		showAll();
		showSmartPhones();
		showTablets();
		showDesktop();			
	};

	var showAll = function(){
		$('#all').on('click', function(e){
			e.preventDefault();
			$('iframe').removeClass('is-hide');
			$('iframe.desktop').addClass('is-hide');
		})
	};

	var showSmartPhones = function(){
		$('#smarts').on('click', function(e){
			e.preventDefault();
			$('iframe').addClass('is-hide');
			$('iframe.phone').removeClass('is-hide');
		})
	};	

	var showTablets = function(){
		$('#tablets').on('click', function(e){
			e.preventDefault();
			$('iframe').addClass('is-hide');
			$('iframe.tablet').removeClass('is-hide');
		})
	};

	var showDesktop = function(){
		$('#desktop').on('click', function(e){
			e.preventDefault();
			$('iframe').addClass('is-hide');
			$('iframe#frame-bg').removeClass('is-hide');
		})
	};

	var showPortrait = function(){
		$('iframe.phone,iframe.tablet').on('dblclick', function(){

			var width = $(this).width() + 40;
			var height = $(this).height() + 40;

			$(this).animate({
				'width':height + 'px',
				'height':width + 'px'
			},500);
		});
	};

	var getUrlVars = function(){
	    var vars = [], hash;
	    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	    for(var i = 0; i < hashes.length; i++)
	    {
	        hash = hashes[i].split('=');
	        vars.push(hash[0]);
	        vars[hash[0]] = hash[1];
	    }
	    return vars;
	}

	if(getUrlVars()['url'] != "" && getUrlVars()['url'] != undefined){

		$('.search').addClass('is-hide');
		$('.content, aside').removeClass('is-hide');

		var url = getUrlVars()['url'].replace(/%2F/g , '/');
			url = url.replace(/%3A/g, ':');
			url = url.replace(/#/g, '');

		triggerMenu();
		loadDevices(url);
	}else{
		$('.search').removeClass('is-hide');
		$('.content, aside').addClass('is-hide');		
	}