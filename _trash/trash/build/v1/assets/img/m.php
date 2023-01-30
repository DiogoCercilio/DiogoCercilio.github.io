<!doctype html>
<html lang="pt-br">
    <head>
        <title></title>
        <meta name="viewport" content="width=320px">
        <meta charset="UTF-8">
        <style>
        *{
            margin:0;
            padding:0;
            list-style: none;
            text-decoration:none; 
        }

        a{
            color: #aaa;
            text-shadow:1px 1px 0px #666;
            font-size: 30px;
            font-family:helvetica;
            font-weight: bold;
            line-height:50px;
        }

        .box{
            width:314px;
            height:auto;
            border:1px solid #aaa;
            background: #eee;
            margin:3px;
            border-radius:3px;
            box-shadow: 3px 3px 3px #888;
            text-align:center;
        }
        </style>
        <script src="http://zeptojs.com/zepto.min.js"></script>
        <script>

            // execute callback when the page is ready:
            Zepto(function($){
                Zepto("a").tap(function(){
                    alert("Tap");
                })
            })


        // $(function(){

  

        // })
        </script>
    </head>
        <body>
            
        <div class="box">
            <a href="#">Clique</a>
        </div>    


        </body>
</html>