/* 
$("#form-contact-us").validate({
    rules: {
      contact_email: "required",
      contact_message: "required"
    },
    submitHandler: function () {
      if (!disabled) {
        button.disabled = true;
        button.val("Sending...");
        var data = $(this.currentForm).serialize();
        $.post('mailer/', data, function (response) {
          disabled = false;
          button.val("Send");
          button.disabled = false;
          if (response.error) {
            toastr.error(response.message)
          } else {
            toastr.success(response.message)
            $("#contact_email").val("");
            $("#contact_message").val("");
          }
        }, 'json');
      }
      disabled = true;
    }
  });

  function setActiveMenuItem() {
    $(".sidemenu a, .overlay-menu a").each(function (index) {
      if ($(this).attr("data-id") == dataId) {
        $(this).addClass('active-link');
      } 
    });
  }
*/