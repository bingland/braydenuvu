// alert 
$('.alert').on('closed.bs.alert', function () {
    $('#hide').toggle()
    setTimeout(function() {
        $('#hide').toggle()
    }, 2000)
  })

// tooltip
$('#tooltip1').tooltip()
$('#tooltip2').tooltip()
$('#tooltip3').tooltip()