$(document).ready(function () {
  let currentTab = 0;

  // progress bar code
  let currentSection = 0;
  const quizprogressBar = document.querySelector(".quiz_progress");
  const quizTabcount = $(".tab[data-progressbar]");

  // Function to update progress bar
  function updateQuizProgress() {
    const quiz_P_progress = ((currentSection + 1) / 11) * 100;
    quizprogressBar.style.width = `${quiz_P_progress}%`;
    // console.log("quiz_P_progress", quiz_P_progress);
    if (quiz_P_progress == 100) {
      $(".quiz_progress-bar").hide();
    } else {
      $(".quiz_progress-bar").show();
    }
  }

  // Quiz collection code
  const healthGoal = localStorage.getItem("healthGoalsResult");

  if (healthGoal) {
    document
      .querySelectorAll(".quiz-recommended-product")
      .forEach((el) => (el.style.display = "none"));
    document
      .querySelectorAll(`.quiz-recommended-product.${healthGoal}`)
      .forEach((el) => (el.style.display = "block"));

    document
      .querySelectorAll(".tab")
      .forEach((el) => (el.style.display = "none"));
    document
      .querySelectorAll(".button-groups")
      .forEach((el) => (el.style.display = "none"));
    document
      .querySelectorAll(".my-quiz")
      .forEach((el) => (el.style.display = "none"));

    const finalResult = document.querySelector(".final_result");
    if (finalResult) {
      finalResult.style.display = "block";
      finalResult.classList.add("active_step");
    }
  } else {
    document
      .querySelectorAll(".tab")
      .forEach((el) => (el.style.display = "none"));
    const tabs = document.querySelectorAll(".tab");
    if (tabs[currentTab]) {
      tabs[currentTab].style.display = "block";
      tabs[currentTab].classList.add("active_step");
    }
  }

  let collectedData = {};
  let navigationHistory = [];
  // const phoneInput = document.querySelector("input#phone");

  // mobile country selected
  // const iti = window.intlTelInput(phoneInput, {
  //   initialCountry: "us",
  //   separateDialCode: true,
  //   preferredCountries: ["us", "gb", "in", "au", "ca"],
  //   utilsScript:
  //     "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js",
  // });


  
  // validate quiz Tab
  function validateTab() {
    let valid = true;
    const inputs = $(".tab")
      .eq(currentTab)
      .find("input:required, input[type='radio']:required");

    inputs.each(function () {
      let inputType = $(this).attr("type");
      let inputName = $(this).attr("name");
      let inputValue = $(this).val();
      // Validate radio buttons
      if (inputType === "radio") {
        const radioGroup = $(`[name=${inputName}]`);
        if (!radioGroup.is(":checked")) {
          valid = false;
        }
      }
      // Validate text and email inputs
      else if (!inputValue) {
        valid = false;
      }
      $(this).toggleClass("cstm__invalid", !valid);
    });
    return valid;
  }

function collectData(isNext = true) {
    let collectedData = {};
    let storedData = JSON.parse(localStorage.getItem("COllectiontotal")) || {}; // Retrieve stored data
    const inputs = $(".tab").eq(currentTab).find("input:checked, input[type='email'], input[type='text']");

    if (!inputs.length) return; // Prevent breaking if no inputs are found

    let issueFields = [
        "how-would-you-best-describe-your-skin-health",
        "how-would-you-best-describe-your-gut-health",
        "how-often-do-you-experience-bone-related-issues",
        "do-you-experience-any-eye-discomfort",
        "what-immunity-related-issues-do-you-experience",
        "what-best-describe-your-muscle-health",
        "what-issues-do-you-usually-face",
        "do-you-experience-any-of-the-following",
        "how-long-have-you-been-experiencing-hormonal-imbalances",
        "which-one-of-the-following-best-describe-your-healthy-aging-goals"
    ];

    // Collect input values
    inputs.each(function () {
        let name = $(this).attr("name");
        let value = $(this).val().replace(/-/g, ' ').trim();
        let key = issueFields.includes(name) ? "quiz-answer-issue" : name; 

        if (this.type === "checkbox") {
            if (!collectedData[key]) {
                collectedData[key] = [];
            }
            collectedData[key].push(value);
        } else {
            collectedData[key] = value;
        }
    });

    // If going back, remove future step data
    if (!isNext) {
        removeNextStepData(storedData);
    }

    // Merge collected data with stored data
    storedData = { ...storedData, ...collectedData };

    // Save updated data to localStorage
    localStorage.setItem("COllectiontotal", JSON.stringify(storedData));
}

// Function to remove future steps’ data when a user goes back
function removeNextStepData(storedData) {
    $(".tab").each(function (index) {
        if (index > currentTab) {
            $(this).find("input").each(function () {
                let name = $(this).attr("name");

                // Handle issue fields to ensure "quiz-answer-issue" is not wrongly deleted
                if (storedData[name]) {
                    delete storedData[name];
                } else if (storedData["quiz-answer-issue"]) {
                    delete storedData["quiz-answer-issue"];
                }
            });
        }
    });

    localStorage.setItem("COllectiontotal", JSON.stringify(storedData));
}

// Restore saved data when the page loads
function restoreFormData() {
    let storedData = JSON.parse(localStorage.getItem("COllectiontotal")) || {};

    Object.keys(storedData).forEach((key) => {
        let value = storedData[key];

        if (key === "quiz-answer-issue") {
            // Restore issue-related fields
            let issueInputs = $(`input[name]:checkbox`).filter(function () {
                return issueFields.includes($(this).attr("name"));
            });

            if (Array.isArray(value)) {
                value.forEach(item => {
                    issueInputs.filter(`[value="${item}"]`).prop("checked", true);
                });
            } else {
                issueInputs.val(value);
            }
        } else {
            let inputField = $(`input[name="${key}"]`);

            if (Array.isArray(value)) {
                // For checkboxes, mark them as checked
                value.forEach(item => {
                    $(`input[name="${key}"][value="${item}"]`).prop("checked", true);
                });
            } else {
                // For text/email inputs, set the value
                inputField.val(value);
            }
        }
    });
}

// Live update storage when inputs change
$(document).on("input change", "input", function () {
    collectData(true);
});

// Restore data on page load
$(document).ready(function () {
    let isPageRefreshed = performance.navigation.type === 1; 
    if (isPageRefreshed) {
           localStorage.setItem("COllectiontotal", "[]");
    }
    restoreFormData();
});

  
  // Show Specific tab
  function showTab(n) {
    $(".tab").hide().removeClass("active_step");
    $(".tab").eq(n).show().addClass("active_step");
    $("#prevBtn").toggle(n > 0);
  }

  // mobile function
  function validatePhoneNumber(event) {
    let progressValue = $(".tab.active_step").attr("data-progressbar");
    if (progressValue == 2) {
      const phoneInput = document.getElementById("phone");
      const errorMessage = document.getElementById("error-message");

      if (phoneInput.value.length < 10 || phoneInput.value.length > 15) {
        errorMessage.style.display = "block";
        phoneInput.style.border = "2px solid red";
        setTimeout(() => {
          phoneInput.style.border = "2px solid #3a464f4a";
          errorMessage.style.display = "none";
        }, 1500);

        event.preventDefault(); 
        return false;
      } else {
        errorMessage.style.display = "none";
        return true;
      }
    }
    return true;
  }
  

  
  // Next button click event
  $("body").on("click", ".cstm__next", function () {
   const mobileVals = parseInt($(".tab.active_step").attr("data-progressbar"), 10);
          // console.log("mobileVals>>>>>>>>>", mobileVals);
     if (mobileVals === 2) {
          let quizfullPhone = $('#phone').attr("data-full-phone"); 
          if (quizfullPhone) {
          $('#phone').val(quizfullPhone);
            // console.log('updatedmobile:', updatedmobile);
          }
     }

    
    collectData(true);

    const emailInput = document.querySelector('input[name="email"]');
    const emailErrorMessage = document.getElementById("email-error-message");
    if (emailInput) {
      const email = emailInput.value.trim();
      const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      };

      if (!validateEmail(email)) {
        emailInput.style.border = "2px solid red";
        emailErrorMessage.style.display = "block";
        setTimeout(() => {
          emailInput.style.border = "2px solid #3a464f4a";
          emailErrorMessage.style.display = "none";
          // localStorage.setItem("COllectiontotal", "[]");
        }, 1800);
        return;
      }
    }
    // Mobile validation for Next button
    if (!validatePhoneNumber(event)) {
      return false;
    }
         

    navigationHistory.push(currentTab);
    // custom shopify quiz API
  async function locationGet() {
    try {
        const userLanguage = navigator.language || navigator.userLanguage;
        const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        const response = await fetch("https://ipwhois.app/json/");
        if (!response.ok) throw new Error("Failed to fetch IP details");

        const data = await response.json();
        return {
            language: userLanguage,
            timeZone: userTimeZone,
            ip: data.ip,
            country: data.country,
            latitude: data.latitude,
            longitude: data.longitude
        };
    } catch (error) {
        console.error("Error fetching IP details:", error);
        return null;
    }
}

  // Fetch location and send quiz data
  async function sendQuizData() {
    try {
        const quizData = JSON.parse(localStorage.getItem("COllectiontotal"));
        if (!quizData || Object.keys(quizData).length === 0) {
            throw new Error("No quiz data collected");
        }

        const locationData = await locationGet();
        if (!locationData) {
            console.error("Failed to fetch location data");
            return;
        }

        // Merge quizData with locationData
        // const response = await fetch("https://8b6e-117-254-12-80.ngrok-free.app/inventory-management/public/api/quiz", {
      
        const finalData = { ...quizData, location: locationData };
         const response = await fetch("https://inventory.wellnessextract.com/api/quiz", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(finalData),
        });
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! Status: ${response.status} - ${errorText}`);
        }

         console.log("Thanks for completed Quiz", finalData);
    } catch (error) {
        console.error("Server Error:", error);
    }
}

// next function when needed
    let nextTab = $(".tab").eq(currentTab).attr("data-next-quiz-move");
    if (nextTab === "final_result") {
      $(".button-groups").hide();
      $(".my-quiz").hide();
      let hgoal = localStorage.getItem("healthGoals");
      localStorage.setItem("healthGoalsResult", hgoal);
      // console.log("result page collection Name:", hgoal);
      
      // call sendQuizData() 
      sendQuizData();
      // call end 
    }
    if (nextTab && $(`.${nextTab}`).length) {
      currentTab = $(".tab").index($(`.${nextTab}`));
    } else {
      currentTab++;
    }

    // progress bar
    if (currentSection < quizTabcount.length - 1) {
      currentSection++;
       updateQuizProgress();
    }
    showTab(currentTab);
    
 $(document).ready(function () {
  // Get the current progress validation step
  const progressValidation = parseInt($(".tab.active_step").attr("data-progressbar"));

  // Radio validation for specific progress steps
  if ([3, 4, 6, 14, 17, 18, 19].includes(progressValidation)) {
    $(".cstm__next").prop("disabled", true);

    $("body").off("change", 'input[type="radio"]').on("change", 'input[type="radio"]', function () {
      const quizContainer = $(this).closest(".quiz-select_option-option");
      const optionIsChecked = quizContainer.find('input[type="radio"]:checked').length > 0;
  if(optionIsChecked){
          $("#nextBtn").prop("disabled", false);
          }else{
            $("#nextBtn").prop("disabled", false);
          }  
    });
  }

   if (progressValidation === 5) {
    $(".cstm__next").prop("disabled", true);

    $("body").off("change", ".quiz_user_selected_collection .quiz-list input[type='radio']")
        .on("change", ".quiz_user_selected_collection .quiz-list input[type='radio']", function () {
            const isSelected = $(".quiz_user_selected_collection .quiz-list input[type='radio']:checked").length > 0;
          if(isSelected){
          $("#nextBtn").prop("disabled", false);
          }else{
            $("#nextBtn").prop("disabled", false);
          }  
        });
}


  // Checkbox validation for specific progress steps
  const progressValidation2 = parseInt($(".tab.active_step").attr("data-progressbar"));
  if ([7, 8, 9, 10, 11, 12, 13, 15, 16].includes(progressValidation2)) {
    $(".cstm__next").prop("disabled", true);

    $("body").off("change", ".quiz-list input[type='checkbox']").on("change", ".quiz-list input[type='checkbox']", function () {
      const isSelected = $(".tab.active_step .quiz-list input[type='checkbox']:checked").length > 0;
      $(".cstm__next").prop("disabled", !isSelected);
    });
  }
});
// Input validation end
});

  // Previous button click event
  $("body").on("click", ".cstm__pre", function () {
      if (navigationHistory.length > 0) {
      currentTab = navigationHistory.pop();
    } else {
      currentTab--;
    }
//storage remove
  const cookiesRefremoves = parseInt($(".tab.active_step").attr("data-progressbar"));
   const emailInput = document.querySelector('input[name="email"]');
    const emailErrorMessage = document.getElementById("email-error-message");
    if (emailInput) {
      const email = emailInput.value.trim();
      // console.log("email", email);
      const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      };

      if (!validateEmail(email)) {
        emailInput.style.border = "2px solid red";
        emailErrorMessage.style.display = "block";
        setTimeout(() => {
          // localStorage.setItem("COllectiontotal", "[]");
          emailInput.style.border = "2px solid #3a464f4a";
          emailErrorMessage.style.display = "none";
        }, 1800);
        return;
      }
    }  
    
 console.log("cookiesRefremoves", cookiesRefremoves);
 if (cookiesRefremoves === 3) { 
    let phoneInput = $('input#phone');
    let phoneValue = phoneInput.val().trim(); // Get the phone number and trim spaces
    let updatedPhone = phoneValue; // Default value before checking country code

    $('.iti__country-list li .iti__dial-code').each(function () {
        let countryCode = $(this).text().trim(); // Get country code

        // Check if the phone number starts with the country code
        if (phoneValue.startsWith(countryCode)) {
            updatedPhone = phoneValue.replace(countryCode, '').trim(); // Remove country code
            return false; // Stop looping once a match is found
        }
    });

    phoneInput.val(updatedPhone); // Set the new value without country code
    // console.log("Updated phone number:", updatedPhone);
}

   
        if ([1, 2, 3, 4, 5, 6, 7, 8].includes(cookiesRefremoves)) {
      $("#nextBtn").prop("disabled", false);
    } 
  
    showTab(currentTab);
    // loadStoredValues();
    
    collectData(false);

    // progress bar code
    if (currentSection > 0) {
      currentSection--;
      updateQuizProgress();
    }
  });

  // Store selected value on click
  $("body").on("click", ".cstm__select_collection .custom-label", function () {
    let next_val = $(this).parent().find("input").val();
    $(this).closest(".tab").attr("data-next-quiz-move", next_val);
    localStorage.setItem("healthGoals", next_val);
    $(".quiz-recommended-product").hide();
    $(`.quiz-recommended-product.${next_val}`).show();
  });

  // Quiz collection selected
  // $("body").on("click", ".custom-label", function () {
  //   let $checkbox = $(this).prev("input[type='checkbox']");
  //   let $tab = $(this).closest(".quiz-list");
  //   if ($checkbox.hasClass("none-of-the-above")) {
  //     $tab.find("input[type='checkbox']").prop("checked", false);
  //     $checkbox.prop("checked", true);
  //   } else {
  //     // If any other checkbox is clicked, uncheck "None of the Above"
  //     $tab.find(".none-of-the-above").prop("checked", false);
  //   }
  // });
  $("body").on("click", ".custom-label", function () {
    let $checkbox = $(this).prev("input[type='checkbox']");
    let $tab = $(this).closest(".quiz-list");

    if ($checkbox.hasClass("none-of-the-above") || 
        $checkbox.hasClass("i-don-t-take-any-supplements-right-now") || 
        $checkbox.hasClass("other")) {
        
        // Uncheck all other checkboxes in the group
        $tab.find("input[type='checkbox']").prop("checked", false);
        // Check only the clicked one
        $checkbox.prop("checked", true);
    } else {
        // If any other checkbox is clicked, uncheck the special ones
        $tab.find(".custom-label, .none-of-the-above, .i-don-t-take-any-supplements-right-now, .other").prop("checked", false);
    }
});


  // quiz local storage removed
  $("body").on("click", ".backtoStart", function () {
    localStorage.clear();
    window.location.reload();
  });

  // Initialize the UI
  updateQuizProgress();

}); 
