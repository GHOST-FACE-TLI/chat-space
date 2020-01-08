$(function(){
  function buildHTML(message){
    image = (message.image) ? `<img class= "lower-message__image" src=${message.image} >` : "";
    var html =
      `<div class="Chat-message__post__name">
            ${message.user_name}
            <div class="Chat-message__post__name--time">
              ${message.created_at}
            </div>
          </div>
          <div class="Chat-message__post__comment" data-message-id="${message.id}">
            <p>${message.content}</p>
            ${image}
          </div>
        </div>
      </div>`
      return html;
  }  
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.Chat-message__post').append(html);
      $('.Chat-message__post').animate({ scrollTop: $('.Chat-message__post')[0].scrollHeight});
      $('form')[0].reset();
      $('.send-btn__icon').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });

  var reloadMessages = function() {
    var last_message_id = $('.Chat-message__post__comment:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'GET',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function (messages) {
     if (messages.length !== 0) {
      var insertHTML = '';
      $.each(messages, function(i,message) {
        insertHTML += buildHTML(message)
      });
      $('.Chat-message__post').append(insertHTML);
      $('.Chat-message__post').animate({ scrollTop: $('.Chat-message__post')[0].scrollHeight});
      $("#new_message")[0].reset();
      $(".form__submit").prop("disabled", false);
      }
    })
    .fail(function() {
      alert("自動更新に失敗しました")
    });
  };
  if (document.location.href.match(/\/groups\/\d+\/messages/)){
    setInterval(reloadMessages, 4000);
  }
});