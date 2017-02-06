lifeguard =  lifeguard || {};

lifeguard.desktop = {
	target:'.desktoppage',
	fixArrows: function(){
		var box = document.querySelector('.small-box');
		if (typeof box === "undefined" || box === null) {
			return;
		}
		var afterHeightString = window.getComputedStyle(box, ':before').getPropertyValue('height');
		var afterHeight = parseInt(afterHeightString, 10);
		$(".small-box", this.target).outerHeight(afterHeight);//*0.7071
		
		
		box = document.querySelector('.big-box');
		if (typeof box === "undefined" || box === null) {
			return;
		}
		afterHeightString = window.getComputedStyle(box, ':before').getPropertyValue('height');
		afterHeight = parseInt(afterHeightString, 10);
		$(".big-box", this.target).outerHeight(afterHeight);//*0.7071		
	},	
	showResultGroup: function(index){
		console.log( "showResultGroup..." );
		
		//first hide all results
		$("#class-result > div").css( "display", "none" );
		
		//then display only the coresponding one
		if (index == 0) {
				console.log("showing the lifeguard id");
				$('#lifeguard',this.target).css('display', '');
				setTimeout(function(target){
					$('#lifeguard',target).css( "visibility", "visible" );
					$('#lifeguard',target).css( "opacity", "1" );
				}(this.target), 0);
		}else if (index == 1) {
			$("#lifesaving_instructor",this.target).css('display', '');
				setTimeout(function(target){
					$('#lifesaving_instructor',target).css( "visibility", "visible" );
					$('#lifesaving_instructor',target).css( "opacity", "1" );
				}(this.target), 0);		
		}else if (index == 2) {
			$("#red_cross_swimming_instructor",this.target).css('display', '');
				setTimeout(function(target){
					$('#red_cross_swimming_instructor',target).css( "visibility", "visible" );
					$('#red_cross_swimming_instructor',target).css( "opacity", "1" );
				}(this.target), 0);		
		}else if (index == 3) {
			$("#bcrpa_aquafit_instructor",this.target).css('display', '');
				setTimeout(function(target){
					$('#bcrpa_aquafit_instructor',target).css( "visibility", "visible" );
					$('#bcrpa_aquafit_instructor',target).css( "opacity", "1" );
				}(this.target), 0);			
		}else if (index == 4) {
			$("#pool_operator",this.target).css('display', '');
				setTimeout(function(target){
					$('#pool_operator',target).css( "visibility", "visible" );
					$('#pool_operator',target).css( "opacity", "1" );
				}(this.target), 0);			
		}else if (index == 5) {
			$("#first_aid",this.target).css('display', '');
				setTimeout(function(target){
					$('#first_aid',target).css( "visibility", "visible" );
					$('#first_aid',target).css( "opacity", "1" );
				}(this.target), 0);			
		}
	},
	computeResult: function(){
		console.log( "computeResult..." );
		if (categoryIndex==-1 || ageIndex==-1) return;
		this.showResultGroup(categoryIndex);
		//if (categoryIndex==0){
			//showResultGroup(0);
		//}
		this.showResultClasses(categoryIndex,ageIndex);
		this.fixArrows();
	},
	init_lifeguard: function(){
		//first enable all buttons and make all visible
		$('#lifeguard_div_buttons a',this.target).removeClass("ui-state-disabled");
		$('#lifeguard_div_buttons a',this.target).css( "visibility", "visible" );
		
		$('#lifeguard_div_buttons a',this.target).removeClass("ui-btn-active");
		
		//make both Available after the age visible
		$('#lifeguard_div_available .available_after_age',this.target).css( "visibility", "visible" );
		
		//show sfa text
		$('#lifeguard_div_notes .ui-block-b',this.target).css( "visibility", "visible" );
		$('#lifeguard_div_notes .ui-block-c',this.target).css( "visibility", "visible" );
		$('#lifeguard_div_notes .ui-block-d',this.target).css( "visibility", "visible" );
		$('#lifeguard_div_notes .ui-block-e',this.target).css( "visibility", "visible" );
	},

	init_lifesaving_instructor: function(){
	
		$('#lifesaving_instructor_div_available',this.target).css( "visibility", "visible" );
		
		$('#lifesaving_instructor_div_available',this.target).css('display', '');
		$('#lifesaving_instructor_div_buttons a',this.target).css('display', '');
		// $('#lifesaving_instructor_div_sorry',this.target).css('display', '');
		
		//first enable all buttons and make all visible
		$('#lifesaving_instructor_div_buttons a',this.target).removeClass("ui-state-disabled");
		$('#lifesaving_instructor_div_buttons a',this.target).removeClass("ui-btn-active");

		
		$('#lifesaving_instructor_div_buttons a',this.target).css( "visibility", "visible" );
		
		//make both Available after the age visible
		$('#lifesaving_instructor_div_available .available_after_age_general',this.target).css( "visibility", "visible" );
		$('#lifesaving_instructor_div_available .ui-block-b',this.target).css( "visibility", "visible" );

		$('#lifesaving_instructor_div_available .ui-block-d',this.target).css( "visibility", "visible" );
		$('#lifesaving_instructor_div_available .ui-block-e',this.target).css( "visibility", "visible" );

	},

	init_red_cross_swimming_instructor: function(){
		
		$('#red_cross_swimming_instructor_div_buttons',this.target).css('display', '');
		
		//first enable all buttons and make all visible
		$('#red_cross_swimming_instructor_div_buttons a',this.target).removeClass("ui-state-disabled");
		$('#red_cross_swimming_instructor_div_buttons a',this.target).css( "visibility", "visible" );
		//make both Available after the age visible
		$('#red_cross_swimming_instructor_div_available .ui-block-b',this.target).css( "visibility", "visible" );
		$('#red_cross_swimming_instructor_div_available .ui-block-c',this.target).css( "visibility", "visible" );
		$('#red_cross_swimming_instructor_div_available .ui-block-d',this.target).css( "visibility", "visible" );
		//
	},

	init_bcrpa_aquafit_instructor: function(){
		
		$('#bcrpa_aquafit_instructor_div_buttons',this.target).css('display', '');
		
		//first enable all buttons and make all visible
		$('#bcrpa_aquafit_instructor_div_buttons a',this.target).removeClass("ui-state-disabled");
		$('#bcrpa_aquafit_instructor_div_buttons a',this.target).css( "visibility", "visible" );

		$('#bcrpa_aquafit_instructor_div_available .ui-block-c',this.target).css( "visibility", "visible" );
		$('#bcrpa_aquafit_instructor_div_available .ui-block-e',this.target).css( "visibility", "visible" );

	},

	init_pool_operator: function(){
		$('#pool_operator_div_buttons',this.target).css('display', '');
		
		//first enable all buttons and make all visible
		$('#pool_operator_div_buttons a',this.target).removeClass("ui-state-disabled");
		$('#pool_operator_div_buttons a',this.target).css( "visibility", "visible" );

		$('#pool_operator_div_available .ui-block-e',this.target).css( "visibility", "visible" );
	},

	init_first_aid: function(){
		
		$('#first_aid_div_buttons',this.target).css('display', '');
		
		//first enable all buttons and make all visible
		$('#first_aid_div_buttons a',this.target).removeClass("ui-state-disabled");
		$('#first_aid_div_buttons a',this.target).css( "visibility", "visible" );

		$('#first_aid_div_available .ui-block-c',this.target).css( "visibility", "visible" );
		
		//make both Available after the age visible
	},

	processResult_lifeguard: function (ageIndex){
		this.init_lifeguard();
			if (ageIndex == 0){
				$('#lifeguard .bronze_medallion',this.target).addClass("ui-state-disabled");
				$('#lifeguard .bronze_cross',this.target).addClass("ui-state-disabled");
				$('#lifeguard .bronze_medallion_cross_combination',this.target).addClass("ui-state-disabled");
				$('#lifeguard .standard_first_aid',this.target).addClass("ui-state-disabled");
				$('#lifeguard .standard_first_aid_recertification',this.target).addClass("ui-state-disabled");
				$('#lifeguard .national_lifeguard_pool',this.target).addClass("ui-state-disabled");
				$('#lifeguard .national_lifeguard_water_park',this.target).addClass("ui-state-disabled");
				$('#lifeguard .national_lifeguard_recertification',this.target).addClass("ui-state-disabled");
				$('#lifeguard .national_lifeguard_water_park_recertification',this.target).addClass("ui-state-disabled");
			} else if (ageIndex == 1){
				$('#lifeguard .national_lifeguard_pool',this.target).addClass("ui-state-disabled");
				$('#lifeguard .national_lifeguard_water_park',this.target).addClass("ui-state-disabled");	
				$('#lifeguard .national_lifeguard_recertification',this.target).addClass("ui-state-disabled");
				$('#lifeguard .national_lifeguard_water_park_recertification',this.target).addClass("ui-state-disabled");			
				$('#lifeguard .standard_first_aid',this.target).addClass("ui-state-disabled");
				$('#lifeguard .standard_first_aid_recertification',this.target).addClass("ui-state-disabled");
				$('#lifeguard_div_available .ui-block-b',this.target).css( "visibility", "hidden" );

			} else if (ageIndex == 2){
				$('#lifeguard .national_lifeguard_pool',this.target).addClass("ui-state-disabled");
				$('#lifeguard .national_lifeguard_water_park',this.target).addClass("ui-state-disabled");
				$('#lifeguard .national_lifeguard_recertification',this.target).addClass("ui-state-disabled");
				$('#lifeguard .national_lifeguard_water_park_recertification',this.target).addClass("ui-state-disabled");				
				
				$('#lifeguard_div_available .ui-block-b',this.target).css( "visibility", "hidden" );
				$('#lifeguard_div_available .ui-block-c',this.target).css( "visibility", "hidden" );
				
				////hide sfa text
				$('#lifeguard_div_notes .ui-block-c',this.target).css( "visibility", "hidden" );
	
			} else if (ageIndex == 3){
				$('#lifeguard .national_lifeguard_pool',this.target).addClass("ui-state-disabled");
				$('#lifeguard .national_lifeguard_water_park',this.target).addClass("ui-state-disabled");
				$('#lifeguard .national_lifeguard_recertification',this.target).addClass("ui-state-disabled");
				$('#lifeguard .national_lifeguard_water_park_recertification',this.target).addClass("ui-state-disabled");		
				
				$('#lifeguard_div_available .ui-block-b',this.target).css( "visibility", "hidden" );
				$('#lifeguard_div_available .ui-block-c',this.target).css( "visibility", "hidden" );
			
				////hide sfa text
				$('#lifeguard_div_notes .ui-block-c',this.target).css( "visibility", "hidden" );	

			} else if (ageIndex == 4){
				// $('#lifeguard .bronze_star',this.target).addClass("ui-state-disabled");
				
				$('#lifeguard_div_available .ui-block-b',this.target).css( "visibility", "hidden" );
				$('#lifeguard_div_available .ui-block-c',this.target).css( "visibility", "hidden" );
				$('#lifeguard_div_available .ui-block-e',this.target).css( "visibility", "hidden" );

				////hide sfa text
				$('#lifeguard_div_notes .ui-block-c',this.target).css( "visibility", "hidden" );				
			} 	
	},
	processResult_lifesaving_instructor: function(ageIndex){
			this.init_lifesaving_instructor();
			if (ageIndex == 0){
				$('#lifesaving_instructor .bronze_medallion',this.target).addClass("ui-state-disabled");
				$('#lifesaving_instructor .bronze_cross',this.target).addClass("ui-state-disabled");
				$('#lifesaving_instructor .bronze_medallion_cross_combination',this.target).addClass("ui-state-disabled");
				$('#lifesaving_instructor .water_safety_instructor1',this.target).addClass("ui-state-disabled");
				$('#lifesaving_instructor .water_safety_instructor2',this.target).addClass("ui-state-disabled");
				$('#lifesaving_instructor_div_buttons .lifesaving_instructor',this.target).addClass("ui-state-disabled");
				$('#lifesaving_instructor_div_buttons .lifesaving_instructor_recertification',this.target).addClass("ui-state-disabled");

			} else if (ageIndex == 1){
				$('#lifesaving_instructor .water_safety_instructor1',this.target).addClass("ui-state-disabled");
				$('#lifesaving_instructor .water_safety_instructor2',this.target).addClass("ui-state-disabled");
				$('#lifesaving_instructor_div_buttons .lifesaving_instructor',this.target).addClass("ui-state-disabled");
				$('#lifesaving_instructor_div_buttons .lifesaving_instructor_recertification',this.target).addClass("ui-state-disabled");

				$('#lifesaving_instructor_div_available .ui-block-b',this.target).css( "visibility", "hidden" );
			
			} else if (ageIndex == 2){
				$('#lifesaving_instructor .water_safety_instructor1',this.target).addClass("ui-state-disabled");
				$('#lifesaving_instructor .water_safety_instructor2',this.target).addClass("ui-state-disabled");
				$('#lifesaving_instructor_div_buttons .lifesaving_instructor',this.target).addClass("ui-state-disabled");
				$('#lifesaving_instructor_div_buttons .lifesaving_instructor_recertification',this.target).addClass("ui-state-disabled");
				$('#lifesaving_instructor_div_available .ui-block-b',this.target).css( "visibility", "hidden" );
			
			}else if (ageIndex == 3){
				$('#lifesaving_instructor_div_buttons .lifesaving_instructor',this.target).addClass("ui-state-disabled");
				$('#lifesaving_instructor_div_buttons .lifesaving_instructor_recertification',this.target).addClass("ui-state-disabled");
				$('#lifesaving_instructor_div_available .ui-block-b',this.target).css( "visibility", "hidden" );

			} else if (ageIndex == 4){
				// $('#lifesaving_instructor_div_available',this.target).css( "visibility", "hidden" );
				// $('#lifesaving_instructor_div_available .available_after_age_general',this.target).css( "visibility", "hidden" );
				$('#lifesaving_instructor_div_available .ui-block-b',this.target).css( "visibility", "hidden" );
				$('#lifesaving_instructor_div_available .ui-block-e',this.target).css( "visibility", "hidden" );
			} 	
	},
	processResult_red_cross_swimming_instructor: function(ageIndex){
		this.init_red_cross_swimming_instructor();
		if (ageIndex == 0){
			$('#red_cross_swimming_instructor .bronze_medallion',this.target).addClass("ui-state-disabled");
			$('#red_cross_swimming_instructor .bronze_cross',this.target).addClass("ui-state-disabled");
			$('#red_cross_swimming_instructor .bronze_medallion_cross_combination',this.target).addClass("ui-state-disabled");
			$('#red_cross_swimming_instructor .emergency_first_aid',this.target).addClass("ui-state-disabled");
			$('#red_cross_swimming_instructor .standard_first_aid',this.target).addClass("ui-state-disabled");
			$('#red_cross_swimming_instructor .water_safety_instructor1',this.target).addClass("ui-state-disabled");
			$('#red_cross_swimming_instructor .water_safety_instructor2',this.target).addClass("ui-state-disabled");
			$('#red_cross_swimming_instructor .water_safety_instructor_recertification',this.target).addClass("ui-state-disabled");

			// $('#red_cross_swimming_instructor_div_buttons',this.target).addClass("ui-state-disabled");

		} else if (ageIndex == 1){
			$('#red_cross_swimming_instructor .emergency_first_aid',this.target).addClass("ui-state-disabled");
			$('#red_cross_swimming_instructor .standard_first_aid',this.target).addClass("ui-state-disabled");
			$('#red_cross_swimming_instructor .water_safety_instructor1',this.target).addClass("ui-state-disabled");
			$('#red_cross_swimming_instructor .water_safety_instructor2',this.target).addClass("ui-state-disabled");

			$('#red_cross_swimming_instructor_div_available .ui-block-b',this.target).css( "visibility", "hidden" );

			$('#red_cross_swimming_instructor .water_safety_instructor_recertification',this.target).addClass("ui-state-disabled");
			$('#red_cross_swimming_instructor_div_notes',this.target).css( "visibility", "hidden" );

		} else if (ageIndex == 2){
			$('#red_cross_swimming_instructor .water_safety_instructor1',this.target).addClass("ui-state-disabled");
			$('#red_cross_swimming_instructor .water_safety_instructor2',this.target).addClass("ui-state-disabled");
			$('#red_cross_swimming_instructor .water_safety_instructor_recertification',this.target).addClass("ui-state-disabled");

			$('#red_cross_swimming_instructor_div_available .ui-block-b',this.target).css( "visibility", "hidden" );
			$('#red_cross_swimming_instructor_div_available .ui-block-c',this.target).css( "visibility", "hidden" );

			$('#red_cross_swimming_instructor_div_notes',this.target).css( "visibility", "hidden" );
		} else if (ageIndex == 3){
			$('#red_cross_swimming_instructor_div_available .ui-block-b',this.target).css( "visibility", "hidden" );
			$('#red_cross_swimming_instructor_div_available .ui-block-c',this.target).css( "visibility", "hidden" );
			$('#red_cross_swimming_instructor_div_available .ui-block-d',this.target).css( "visibility", "hidden" );
			//$('#red_cross_swimming_instructor_div_buttons .assistant_water_safety_instructor').addClass("ui-btn-active");
			//$('#red_cross_swimming_instructor_div_buttons .water_safety_instructor').addClass("ui-btn-active");
		} else if (ageIndex == 4){
			$('#red_cross_swimming_instructor_div_available .ui-block-b',this.target).css( "visibility", "hidden" );
			$('#red_cross_swimming_instructor_div_available .ui-block-c',this.target).css( "visibility", "hidden" );
			$('#red_cross_swimming_instructor_div_available .ui-block-d',this.target).css( "visibility", "hidden" );

			//$('#red_cross_swimming_instructor_div_buttons .assistant_water_safety_instructor').addClass("ui-btn-active");
			//$('#red_cross_swimming_instructor_div_buttons .water_safety_instructor').addClass("ui-btn-active");
		} 	
	},
	processResult_bcrpa_aquafit_instructor: function (ageIndex){
			this.init_bcrpa_aquafit_instructor();
			if (ageIndex == 0){
				$('#bcrpa_aquafit_instructor_div_buttons .cpr_c',this.target).addClass("ui-state-disabled");
				$('#bcrpa_aquafit_instructor_div_buttons .emergency_first_aid',this.target).addClass("ui-state-disabled");
				$('#bcrpa_aquafit_instructor_div_buttons .standard_first_aid',this.target).addClass("ui-state-disabled");

				$('#bcrpa_aquafit_instructor_div_buttons .fitness_theory',this.target).addClass("ui-state-disabled");
				$('#bcrpa_aquafit_instructor_div_buttons .instructor_aquafit',this.target).addClass("ui-state-disabled");

			} else if (ageIndex == 1){
				$('#bcrpa_aquafit_instructor_div_buttons .cpr_c',this.target).addClass("ui-state-disabled");
				$('#bcrpa_aquafit_instructor_div_buttons .emergency_first_aid',this.target).addClass("ui-state-disabled");
				$('#bcrpa_aquafit_instructor_div_buttons .standard_first_aid',this.target).addClass("ui-state-disabled");

				$('#bcrpa_aquafit_instructor_div_buttons .fitness_theory',this.target).addClass("ui-state-disabled");
				$('#bcrpa_aquafit_instructor_div_buttons .instructor_aquafit',this.target).addClass("ui-state-disabled");

			} else if (ageIndex == 2){
				$('#bcrpa_aquafit_instructor_div_available .ui-block-c',this.target).css( "visibility", "hidden" );

				$('#bcrpa_aquafit_instructor_div_buttons .fitness_theory',this.target).addClass("ui-state-disabled");
				$('#bcrpa_aquafit_instructor_div_buttons .instructor_aquafit',this.target).addClass("ui-state-disabled");
				
			} else if (ageIndex == 3){
				$('#bcrpa_aquafit_instructor_div_available .ui-block-c',this.target).css( "visibility", "hidden" );

				$('#bcrpa_aquafit_instructor_div_buttons .fitness_theory',this.target).addClass("ui-state-disabled");
				$('#bcrpa_aquafit_instructor_div_buttons .instructor_aquafit',this.target).addClass("ui-state-disabled");
				

			}else if (ageIndex == 4){
				$('#bcrpa_aquafit_instructor_div_available .ui-block-c',this.target).css( "visibility", "hidden" );
				$('#bcrpa_aquafit_instructor_div_available .ui-block-e',this.target).css( "visibility", "hidden" );
				//$('#bcrpa_aquafit_instructor_div_buttons .fitness_theory').addClass("ui-btn-active");
				//$('#bcrpa_aquafit_instructor_div_buttons .instructor_aquafit').addClass("ui-btn-active");
			} 	 	
	},
	processResult_pool_operator: function (ageIndex){
			this.init_pool_operator();
			if (ageIndex == 0){
				$('#pool_operator_div_buttons .pool_operator_1').addClass("ui-state-disabled");
				// $('#pool_operator_div_buttons .pool_operator_2').addClass("ui-state-disabled");
			} else if (ageIndex == 1){
				$('#pool_operator_div_buttons .pool_operator_1').addClass("ui-state-disabled");
				// $('#pool_operator_div_buttons .pool_operator_2').addClass("ui-state-disabled");
			} else if (ageIndex == 2){
				$('#pool_operator_div_buttons .pool_operator_1').addClass("ui-state-disabled");
				// $('#pool_operator_div_buttons .pool_operator_2').addClass("ui-state-disabled");
			} else if (ageIndex == 3){
				$('#pool_operator_div_buttons .pool_operator_1').addClass("ui-state-disabled");
				// $('#pool_operator_div_buttons .pool_operator_2').addClass("ui-state-disabled");

			}else if (ageIndex == 4){
				$('#pool_operator_div_available .ui-block-e',this.target).css( "visibility", "hidden" );

			} 	 	
	},
	processResult_first_aid: function (ageIndex){
			this.init_first_aid();
			if (ageIndex == 0){
				$('#first_aid_div_buttons .emergency_first_aid').addClass("ui-state-disabled");
				$('#first_aid_div_buttons .emergency_first_aid_recertification').addClass("ui-state-disabled");
				$('#first_aid_div_buttons .emergency_child_care_first_aid').addClass("ui-state-disabled");
				$('#first_aid_div_buttons .standard_first_aid').addClass("ui-state-disabled");
				$('#first_aid_div_buttons .standard_first_aid_recertification').addClass("ui-state-disabled");
				$('#first_aid_div_buttons .cpr_c').addClass("ui-state-disabled");
				$('#first_aid_div_buttons .cpr_and_aed_recertification').addClass("ui-state-disabled");

			} else if (ageIndex == 1){
				$('#first_aid_div_buttons .emergency_first_aid').addClass("ui-state-disabled");
				$('#first_aid_div_buttons .emergency_first_aid_recertification').addClass("ui-state-disabled");
				$('#first_aid_div_buttons .emergency_child_care_first_aid').addClass("ui-state-disabled");
				$('#first_aid_div_buttons .standard_first_aid').addClass("ui-state-disabled");
				$('#first_aid_div_buttons .standard_first_aid_recertification').addClass("ui-state-disabled");
				$('#first_aid_div_buttons .cpr_c').addClass("ui-state-disabled");
				$('#first_aid_div_buttons .cpr_and_aed_recertification').addClass("ui-state-disabled");

			} else if (ageIndex == 2){
				$('#first_aid_div_available .ui-block-c',this.target).css( "visibility", "hidden" );
			} else if (ageIndex == 3){
				$('#first_aid_div_available .ui-block-c',this.target).css( "visibility", "hidden" );
			} else if (ageIndex == 4){
				$('#first_aid_div_available .ui-block-c',this.target).css( "visibility", "hidden" );
			} 	 	
	},
	showResultClasses: function(categoryIndex,ageIndex){
		console.log( "showResultClasses...ageIndex:"+ ageIndex);
		if (categoryIndex==0){
			this.processResult_lifeguard(ageIndex);
		}else if (categoryIndex==1){
			this.processResult_lifesaving_instructor(ageIndex);
		}else if (categoryIndex==2){
			this.processResult_red_cross_swimming_instructor(ageIndex);
		}else if (categoryIndex==3){
			this.processResult_bcrpa_aquafit_instructor(ageIndex);
		}else if (categoryIndex==4){
			this.processResult_pool_operator(ageIndex);
		}else if (categoryIndex==5){
			this.processResult_first_aid(ageIndex);
		}
	},
	initPage:function(){
		console.log("desktop init");
		var target='.desktoppage';
		$("#age-grid div a",target).click(function(){
			console.log("#age-grid div a -> click");
			$("#age-grid div a",target).removeClass("ui-btn-active");
			$(this).addClass("ui-btn-active");
			ageIndex=$(this).parent().index();
			lifeguard.desktop.computeResult();
			//$('#slick-mobile-container').slick("slickGoTo",2,false);
		});
		$("#category-grid div a",target).click(function(){
			console.log("#category-grid div a -> click");
			$("#category-grid div a",target).removeClass("ui-btn-active");
			$(this).addClass("ui-btn-active");
			categoryIndex=$(this).parent().index();
			$("#age-grid",target).css( "visibility", "visible" );
			$("#age-grid",target).css( "opacity", "1" );
			console.log( $(this).parent().index() +" and categoryIndex is: "+categoryIndex);
			lifeguard.desktop.computeResult();
		});
		
	$("#class-result div a",target).click(function(){
		//console.log("this is the button!!!");
		//console.log($(this).attr("class").split(' '));
		$(this).attr("class").split(' ').forEach(function(myClass) {
			
			if(result_urls.hasOwnProperty(myClass)){
				var url_to_open=result_urls[myClass];
				window.open(url_to_open, '_blank'); 
				return;
			}
		});
	});		
			initDesktop=true;
	}
};
  

