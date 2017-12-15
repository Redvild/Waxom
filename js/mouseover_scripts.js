		$(".sectionServices_item").mouseover(function(){
			'use strict';
			$(this).children(".sectionServices_itemHeader").css({"color":"#c7b299"});
			$(this).children("hr").css({"backgroundColor":"#c7b299"});
			$(this).children('[class^="sectionServices_image"]').css({"backgroundPositionY":"-49px"});
		})
		.mouseout(function(){
			'use strict';
			$(this).children(".sectionServices_itemHeader").css({"color":"#555555"});
			$(this).children("hr").css({"backgroundColor":"#f1eee9"});
			$(this).children('[class^="sectionServices_image"]').css({"backgroundPositionY":"0"});
		});
	$(".sectionProjects_galleryItem").mouseover(function(){
		'use strict';
			$(this).children(".sectionProjects_galleryText").css({"backgroundColor":"#362f2d"});	$(this).children(".sectionProjects_galleryText").children(".sectionProjects_galleryHeader").css({"color":"#ffffff"}).siblings("p").css({"color":"#c7b299"});
			$(this).children(".sectionProjects_galleryImage").removeClass("sectionProjects_galleryImage_after");
		})
		.mouseout(function(){
		'use strict';
			$(this).children(".sectionProjects_galleryText").css({"backgroundColor":"#fbfaf8"});	$(this).children(".sectionProjects_galleryText").children(".sectionProjects_galleryHeader").css({"color":"#c7b29a"}).siblings("p").css({"color":"#d1d1d1"});
		$(this).children(".sectionProjects_galleryImage").addClass("sectionProjects_galleryImage_after");
		});
			$(".sectionPosts_item").mouseover(function(){
				'use strict';
			$(this).css({"backgroundColor":"#362f2d"});	$(this).children(".sectionPosts_itemText").children(".sectionPosts_itemHeader").css({"color":"#c7b299"}).siblings("p").css({"color":"#ffffff"});
			$(this).children(".sectionPosts_itemImage").addClass("sectionPosts_itemImage_blackout");	$(this).children(".sectionPosts_itemImage").children(".sectionPosts_itemDate").css({"backgroundColor":"#c7b299"}).children(".sectionPosts_dateMonth").css({"backgroundColor":"#a48d72"});
		})
		.mouseout(function(){
				'use strict';
			$(this).css({"backgroundColor":"#ffffff"});	$(this).children(".sectionPosts_itemText").children(".sectionPosts_itemHeader").css({"color":"#555555"}).siblings("p").css({"color":"#8c8c8c"});	
			$(this).children(".sectionPosts_itemImage").removeClass("sectionPosts_itemImage_blackout");	$(this).children(".sectionPosts_itemImage").children(".sectionPosts_itemDate").css({"backgroundColor":"#363636"}).children(".sectionPosts_dateMonth").css({"backgroundColor":"#252525"});
		});
			$(".sectionFooter_articlePosts").mouseover(function(){
				'use strict';
			$(this).children(".sectionFooter_itemDate").css({"color":"#c7b299"});	
			$(this).children(".sectionFooter_textPosts").css({"color":"#ffffff"});
		})
		.mouseout(function(){
				'use strict';
			$(this).children(".sectionFooter_itemDate").css({"color":"#363636"});	
			$(this).children(".sectionFooter_textPosts").css({"color":"#545454"});
		});