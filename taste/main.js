$(function () {
  var iframe = $('#j-iframe')[0];
  var iframeContent = iframe.contentDocument || iframe.contentWindow.document;

  iframeContent.designMode = 'on';
  iframeContent.contentEditable = true;

  iframeContent.write('<html><body></body></html>');

  iframe.contentWindow.focus();

  var editor = $('#j-editor');
  btnBold = editor.find('.btn-bold');
  btnItalic = editor.find('.btn-italic');

  btnBold.click(function () {

    var self = $(this);
    var content =  iframe.contentWindow;

    content.document.execCommand('Bold', false, null);

    if ( self.hasClass('btn-active') ) {
      self.removeClass('btn-active');
    } else {
      self.addClass('btn-active');
    }

    content.focus();
  });

  btnItalic.click(function () {
    alert('未添加');
  });
});