$(function(){
  function buildHTML(message){
   if ( message.image ) {
    var html =
    `<div class"Chat-message" data-message-id=${message.id}>      
        <div class"Chat-message__post">
          <div class="Chat-message__post__name">
            ${message.user_name}
            <div class="Chat-message__post__name--time">
              ${message.created_at}
            </div>
          </div>
          <div class="Chat-message__post__comment">
            <p>${message.content}</p>
            <img src=${message.image}>
          </div>
        </div>
      </div>`
      return html;
    } else {
    var html = 
    `<div class"Chat-message" data-message-id=${message.id}>
      <div class"Chat-message__post">
        <div class="Chat-message__post__name">
          ${message.user_name}
          <div class="Chat-message__post__name--time">
            ${message.created_at}
          </div>
        </div>
        <div class="Chat-message__post__comment">
          ${message.content}
        </div>
      </div>
    </div>`
      return html;
  };
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
    })
  })
});