<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">     
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href='http://fonts.googleapis.com/css?family=Bilbo+Swash+Caps|Quicksand' rel='stylesheet' type='text/css'>
<link defer rel="stylesheet" type="text/css" href="http://diogocercilio.github.io/assets/css/main.css"/></head>
<body id="#inicio" class="home" style="background:url(http://diogocercilio.github.io/assets/img/bg-contact-page.jpg)fixed center no-repeat;background-size:cover;">
    <section id="contato" style="background:none;">
        <div class="box-contact">
                <h1>Contato</h1>
    <p>Sinta-se a vontade para deixar sua mensagem. Obrigado.</p>

    <div class="result"></div>
    <form id="contactForm" action="#" method="post">
        <div class="inputs">
            <input type="text" name="contact_assunto" placeholder="Assunto">
            <input type="text" name="contact_name" placeholder="Nome"><br>
            <input type="text" name="contact_ddd" placeholder="DDD">
            <input type="text" name="contact_phone" placeholder="Telefone"><br>
            <input type="text" name="contact_mail" placeholder="E-mail"><br>
        </div>

        <div class="area">
            <textarea name="contact_message" placeholder="Mensagem"></textarea>
            <input class="sendData" type="submit" name="sendData" value="Enviar">                   
        </div>
    </form>

<div class="right-contact"></div>
<div style="clear:both;"></div>        </div>
    </section>
    <div class="clear"></div>
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
<script>
    var validatePHP = function(){
    $("#contactForm").on("submit", function() {
        var a = $(this).serialize();
        $.ajax("verification.php", {
            type: "POST",
            data: a,
            success: function(b) {
                $(".result").delay(300).fadeOut(200, function() {
                    $(".result").html(b)
                });
                $(".result").fadeIn(1000).delay(5000).fadeOut(1000)
            }
        });
        return false
    })
};

validatePHP();

</script>
</body>
</html>