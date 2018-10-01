
<?php
// Initialize the session
//session_start();
 
// If session variable is not set it will redirect to login page
//if(!isset($_SESSION['username']) || empty($_SESSION['username'])){
  //header("location: /login/login.php");
  //exit;
//}
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta name="description" content="A webpage whit Banana as a team">
	  <meta name="keywords" content="Persenal Testing Web page">
  	<meta name="author" content="Arne Johannesen">
    <title>The Rare Banana | Welcome</title>
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="css/weekly.css">
  </head>
  <body>
    <div class="main">
      <header>
        <div class="container">
          <div id="branding">
            <h1><span class="highlight">The Rare Banana</span></h1>
          </div>
          <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="login/login.php">Login</a></li>
                <li><a href="clock/index.html">Clock</a>
                <li class="current"><a href="weeklySchedule.php">Weekly Schedule</a></li>
                <li><a href="Solitaire/index.html">Solitaire</a></li>             
             
            </ul>
          </nav>
        </div>
      </header>
      <div id="schedule">
          <canvas id="cSchedule" width="1200" height="510">
              If you can see this message, your browser does not support canvas 
              and needs an update. Sorry. :(
          </canvas>
          <canvas id="drawing" width="1200" height="510">
            If you can see this message, your browser does not support canvas 
            and needs an update. Sorry. :(
        </canvas>
          <script></script>
      </div>
    
      <footer>
        <p>The Rare Banana, Copyright &copy; 2018</p>
      </footer>
    </div>
    <script src = "scripts/weekly.js"></script>
    <script src = "scripts/main.js"></script>
  </body>
</html>
