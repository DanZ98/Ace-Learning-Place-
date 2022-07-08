////////////////////////////// Global Toggline submenu list smooth transition

// Toggling arrow rotate 90deg individually
$(document).ready(function() {
    $('.sub-menu-click').click(function() {
    $(this).siblings('.arrow-right').toggleClass('arrow-right-rotate');
    });
});

// Toggling arrow itself hide/show sub menu list individually
$(document).ready(function() {
    $('.arrow-right').click(function() {
  
    $(this).toggleClass('arrow-right-rotate');
    });
});

  
let nav = $('.menu > ul > li');
nav.find('li').hide();

nav.click(function () {
   
    nav.not(this).find('li').hide();
   
    $(this).find('li').slideToggle();
   
    $('.anchors-assessment').toggleClass('anchor-display-none');
  
});

$('.no-collapsable').on('click', function (e) {
    e.stopPropagation();
});
    
let menuBackBtn = $('.menu-back-btn > ul >  li');
menuBackBtn.find('li').hide();

menuBackBtn.click(function () {
    menuBackBtn.not(this).find('li').hide();
    $(this).find('li').slideToggle();
    $('.anchors-assessment').removeClass('anchor-display-none');
    $('.arrow-right').removeClass('arrow-right-rotate');

    // Color Change
    $('#assessment-colorchange').removeClass('link-color-change');
    $('#help-colorchange').removeClass('link-color-change');
    $('#learningplan-colorchange').removeClass('link-color-change');
    $('#bestbrands-colorchange').removeClass('link-color-change');
    $('#mobileapplications-colorchange').removeClass('link-color-change');
    $('#training2-colorchange').removeClass('link-color-change');
    $('#systems-colorchange').removeClass('link-color-change');
 
    // Arrrow links
    $('.learningresources-container__help-anchors').removeClass('anchor-display-none');
    $('.learningresources-container__learningplan-anchors').removeClass('anchor-display-none');
    $('.learningresources-container__assessment-anchors').removeClass('anchor-display-none');

    $('.best-brands').removeClass('anchor-display-none');
    $('.mobile-application').removeClass('anchor-display-none');
    $('.store-systems-operations').removeClass('anchor-display-none');
    $('.training-by-department').removeClass('anchor-display-none');
  
    // Transition
    $('.sub-nav-transition-assessment').removeClass('learning-resources-slide');
    $('.sub-nav-transition-assessment').removeClass('learning-resources-slide-2');
    $('.sub-nav-transition-assessment').removeClass('learning-resources-slide-3');
    $('.sub-nav-transition-assessment').removeClass('bestbrands-slide1');
    $('.sub-nav-transition-assessment').removeClass('bestbrands-slide1');
    $('.sub-nav-transition-assessment').removeClass('mobileapplication-slide');
    $('.sub-nav-transition-assessment').removeClass('storesystem-slide');
    $('.sub-nav-transition-assessment').removeClass('training-slide2');
   
});

        

////////////////////////////// My Learnings Resources
$(function(){
    $('.learning').click(function() {
        $(this).toggleClass('card-transition-reverse');
        $('.card-sub-container').not(this).toggle();
        $('#learningresources-chevron-btn').toggleClass('chevron-container');
        $('nav').toggle();
        $('.card').toggleClass('anchor-display-none');
        
        // Disable onclick for nav
        $("nav").click(function(event){
            event.stopPropagation();
        });
    });
});

// Back Learning Resources & Help Chevron Btn
$(function(){
    $('.chevron-menupage-learning').click(function() {
        $('.card-sub-container').not(this).toggle();
        $('#learningresources-chevron-btn').toggleClass('chevron-container');
        $('.card').toggleClass('anchor-display-none');
        $('nav').toggle();
      
        $('.learning').toggle();
    });
});


// Sub Menu Learning Resources Assessment Link
function learningResourcesAssessmentClick(){

    // Color Change Link
    let redLinkAssessment = document.getElementById('assessment-colorchange');
    redLinkAssessment.classList.toggle('link-color-change');

    // Help Links
    let help = document.getElementsByClassName('learningresources-container__help-anchors');
 
    for(let i = 0; i < help.length; i++){
        let helpLink = help[i];
        helpLink.classList.toggle('anchor-display-none');
    }

    // Learning Plan Links
    let learingPlanResources = document.getElementsByClassName('learningresources-container__learningplan-anchors');
 
    for(let i = 0; i < learingPlanResources.length; i++){
        let learingPlanResourcesLink = learingPlanResources[i];
        learingPlanResourcesLink.classList.toggle('anchor-display-none');
    }

    // Add Submenu Slide Effect        
    let navSubTransition = document.getElementsByClassName('sub-nav-transition-assessment');

    for(let a = 0; a < navSubTransition.length; a++){
    
        let wow = navSubTransition[a];

        wow.classList.toggle('learning-resources-slide');
    }
}

// Sub Menu Learning Resources Help Link
function learningResourcesHelpClick(){

    // Color Change Link
    let redLinkHelp = document.getElementById('help-colorchange');
    redLinkHelp.classList.toggle('link-color-change');

    // Assessment Links
    let assessment = document.getElementsByClassName('learningresources-container__assessment-anchors');
 
    for(let i = 0; i < assessment.length; i++){
        let assessmentLink = assessment[i];
        assessmentLink.classList.toggle('anchor-display-none');
    }

    let learingPlan = document.getElementsByClassName('learningresources-container__learningplan-anchors');
 
    for(let i = 0; i < learingPlan.length; i++){
        let learingPlanLink = learingPlan[i];
        learingPlanLink.classList.toggle('anchor-display-none');
    }

    // Add Submenu Slide Effect        
    let navSubTransition = document.getElementsByClassName('sub-nav-transition-assessment');
    
    for(let a = 0; a < navSubTransition.length; a++){
    
        let wow = navSubTransition[a];

        wow.classList.toggle('learning-resources-slide-2');
    }
}

// Sub Menu Learning Plan Resources Link
function learningResourcesLearningPlanClick(){

    // Color Change Link
    let redLinkLearningPlan = document.getElementById('learningplan-colorchange');
    redLinkLearningPlan.classList.toggle('link-color-change');

    // Assessment Links
    let assessment = document.getElementsByClassName('learningresources-container__assessment-anchors');
 
    for(let i = 0; i < assessment.length; i++){
        let assessmentLink = assessment[i];
        assessmentLink.classList.toggle('anchor-display-none');
    }

    // Help Links
    let help = document.getElementsByClassName('learningresources-container__help-anchors');

    for(let i = 0; i < help.length; i++){
        let helpLink = help[i];
        helpLink.classList.toggle('anchor-display-none');
    }

    // Add Submenu Slide Effect        
    let navSubTransition = document.getElementsByClassName('sub-nav-transition-assessment');

    for(let a = 0; a < navSubTransition.length; a++){
    
        let wow = navSubTransition[a];

        wow.classList.toggle('learning-resources-slide-3');
    }
}


////////////////////////////// What's New This Month
$(function(){
    $('.whatsnew').click(function() {
        $(this).toggleClass('card-transition-reverse');
        $('.card-sub-container').not(this).toggle();
        $('#whatsnew-chevron-btn').toggleClass('chevron-container');
        $('.card').toggleClass('anchor-display-none');
        $('nav').toggle();
      
        // Disable onclick for nav
        $("nav").click(function(event){
            event.stopPropagation();
        });
    });
});

// What's New This Month Back Chevron Btn
$(function(){
    $('.chevron-menupage-whatsnew').click(function() {
        $('.card-sub-container').not(this).toggle();
        $('#whatsnew-chevron-btn').toggleClass('chevron-container');
        $('.card').toggleClass('anchor-display-none');
        $('nav').toggle();
      
        $('.whatsnew').toggle();
    });
});


////////////////////////////// On Demand Courses
$(function(){
    $('.on-demand-courses').click(function() {
        $(this).toggleClass('card-transition-reverse');
        $('.card-sub-container').not(this).toggle();
        $('#ondemandcourses-chevron-btn').toggleClass('chevron-container');
        $('.card').toggleClass('anchor-display-none');
        $('nav').toggle();
      
        // Disable onclick for nav
        $("nav").click(function(event){
            event.stopPropagation();
        });
    });
});

$(function(){
    $('.chevron-menupage-demand').click(function() {
        $('.card-sub-container').not(this).toggle();
        $('#ondemandcourses-chevron-btn').toggleClass('chevron-container');
        $('.card').toggleClass('anchor-display-none');
        $('nav').toggle();
      
        $('.on-demand-courses').toggle();
    });
});

function onDemandCoursesBestBrandsClick(){

     // Color Change Link
     let redLinkBestBrands = document.getElementById('bestbrands-colorchange');
     redLinkBestBrands.classList.toggle('link-color-change');

    //Mobile application Links
    let moblieApplication = document.getElementsByClassName('mobile-application');
 
    for(let i = 0; i < moblieApplication.length; i++){
        let moblieApplicationLink = moblieApplication[i];
        moblieApplicationLink.classList.toggle('anchor-display-none');
    }

    // Store systems & operations links
    let storeSystems = document.getElementsByClassName('store-systems-operations');
 
    for(let i = 0; i < storeSystems.length; i++){
        let storeSystemsLink = storeSystems[i];
        storeSystemsLink.classList.toggle('anchor-display-none');
    }

    // Training by department links
    let trainingByDepartment = document.getElementsByClassName('training-by-department');

    for(let i = 0; i < trainingByDepartment.length; i++){
        let trainingLink = trainingByDepartment[i];
        trainingLink.classList.toggle('anchor-display-none');
    }

    // Add Submenu Slide Effect        
    let navSubTransition = document.getElementsByClassName('sub-nav-transition-assessment');
    
    for(let a = 0; a < navSubTransition.length; a++){
    
        let wow = navSubTransition[a];

        wow.classList.toggle('bestbrands-slide1');
    }
}


function subMenuMobileApplicationClick(){

    // Color Change Link
    let redLinkMobileApplications = document.getElementById('mobileapplications-colorchange');
    redLinkMobileApplications.classList.toggle('link-color-change');

    // Best brands links
    let bestBrands = document.getElementsByClassName('best-brands');

    for(let i = 0; i < bestBrands.length; i++){
        let bestBrandsLink = bestBrands[i];
        bestBrandsLink.classList.toggle('anchor-display-none');
    }

    // Store systems & operations links
    let storeSystems = document.getElementsByClassName('store-systems-operations');

    for(let i = 0; i < storeSystems.length; i++){
        let storeSystemsLink = storeSystems[i];
        storeSystemsLink.classList.toggle('anchor-display-none');
    }

    // Training by department links
    let trainingByDepartment = document.getElementsByClassName('training-by-department');

    for(let i = 0; i < trainingByDepartment.length; i++){
        let trainingLink = trainingByDepartment[i];
        trainingLink.classList.toggle('anchor-display-none');
    }

    // Add Submenu Slide Effect        
    let navSubTransition = document.getElementsByClassName('sub-nav-transition-assessment');

    for(let a = 0; a < navSubTransition.length; a++){
    
        let wow = navSubTransition[a];

        wow.classList.toggle('mobileapplication-slide');
    }
}

function subMenuStoreSystemsClick(){

    // Color Change Link
    let redLinkSystems = document.getElementById('systems-colorchange');
    redLinkSystems.classList.toggle('link-color-change');

    // Best brands links
    let bestBrands = document.getElementsByClassName('best-brands');
 
    for(let i = 0; i < bestBrands.length; i++){
        let bestBrandsLink = bestBrands[i];
        bestBrandsLink.classList.toggle('anchor-display-none');
    }

    //Mobile application Links
    let moblieApplication = document.getElementsByClassName('mobile-application');
 
    for(let i = 0; i < moblieApplication.length; i++){
        let moblieApplicationLink = moblieApplication[i];
        moblieApplicationLink.classList.toggle('anchor-display-none');
    }
 
    // Training by department links
    let trainingByDepartment = document.getElementsByClassName('training-by-department');
 
    for(let i = 0; i < trainingByDepartment.length; i++){
        let trainingLink = trainingByDepartment[i];
        trainingLink.classList.toggle('anchor-display-none');
    }

    // Add Submenu Slide Effect        
    let navSubTransition = document.getElementsByClassName('sub-nav-transition-assessment');

    for(let a = 0; a < navSubTransition.length; a++){
    
        let wow = navSubTransition[a];

        wow.classList.toggle('storesystem-slide');
    }
}


function subMenuTrainingClick(){

    // Color Change Link
    let redLinkTraining3 = document.getElementById('training2-colorchange');
    redLinkTraining3.classList.toggle('link-color-change');

    // Best brands links
    let bestBrands = document.getElementsByClassName('best-brands');

    for(let i = 0; i < bestBrands.length; i++){
        let bestBrandsLink = bestBrands[i];
        bestBrandsLink.classList.toggle('anchor-display-none');
    }

    //Mobile application Links
    let moblieApplication = document.getElementsByClassName('mobile-application');

    for(let i = 0; i < moblieApplication.length; i++){
        let moblieApplicationLink = moblieApplication[i];
        moblieApplicationLink.classList.toggle('anchor-display-none');
    }

    // Store systems & operations links
    let storeSystems = document.getElementsByClassName('store-systems-operations');

    for(let i = 0; i < storeSystems.length; i++){
        let storeSystemsLink = storeSystems[i];
        storeSystemsLink.classList.toggle('anchor-display-none');
    }

    // Add Submenu Slide Effect        
    let navSubTransition = document.getElementsByClassName('sub-nav-transition-assessment');

    for(let a = 0; a < navSubTransition.length; a++){
    
        let wow = navSubTransition[a];

        wow.classList.toggle('training-slide2');
    }
}


////////////////////////////// Instructor Led Training
$(function(){
    $('.instructor').click(function() {
        $(this).toggleClass('card-transition-reverse');
        $('.card-sub-container').not(this).toggle();
        $('#instructor-chevron-btn').toggleClass('chevron-container');
        $('.card').toggleClass('anchor-display-none');
        $('nav').toggle();
      
        // Disable onclick for nav
        $("nav").click(function(event){
            event.stopPropagation();
        });
    });
});

$(function(){
    $('.chevron-menupage-instructor').click(function() {
        $('.card-sub-container').not(this).toggle();
        $('#instructor-chevron-btn').toggleClass('chevron-container');
        $('.card').toggleClass('anchor-display-none');
        $('nav').toggle();
      
        $('.instructor').toggle();
    });
});


////////////////////////////// Training by Department
$(function(){
    $('.trainingdepartment').click(function() {
        // $(this).toggleClass('card-transition-reverse');
        $('.card-sub-container').not(this).toggle();
        $('#trainingdepartment-chevron-btn').toggleClass('chevron-container');
        $('nav').toggle();
        $('.card').toggleClass('anchor-display-none');
        
        // Disable onclick for nav
        $("nav").click(function(event){
            event.stopPropagation();
        });
    });
});

$(function(){
    $('.chevron-menupage-training').click(function() {
        $('.card-sub-container').not(this).toggle();
        $('#trainingdepartment-chevron-btn').toggleClass('chevron-container');
        $('.card').toggleClass('anchor-display-none');
        $('nav').toggle();
      
        $('.trainingdepartment').toggle();
    });
});


//////////////////////////////My Reports
$(function(){
    $('.myreports').click(function() {
        // $(this).toggleClass('card-transition-reverse');
        $('.card-sub-container').not(this).toggle();
        $('#myreports-chevron-btn').toggleClass('chevron-container');
        $('.card').toggleClass('anchor-display-none');
        $('nav').toggle();
      
        // Disable onclick for nav
        $("nav").click(function(event){
            event.stopPropagation();
        });
    });
});

$(function(){
    $('.chevron-menupage-reports').click(function() {
        $('.card-sub-container').not(this).toggle();
        $('#myreports-chevron-btn').toggleClass('chevron-container');
        $('.card').toggleClass('anchor-display-none');
        $('nav').toggle();
      
        $('.myreports').toggle();
    });
});


//////////////////////////////Login differnt URL
console.log(document.referrer);

if (document.referrer.indexOf('acecorporate.sabacloud.com') != -1) {

    $("a").attr("href", function(i, oldHref) {

        if (oldHref) {

        return oldHref.replace(".sabacloud.com", "-acecorporate.sabacloud.com");

        }

    });

}