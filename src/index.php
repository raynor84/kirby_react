<script>document.write('<base href="http://localhost:3000" />');</script>
<?php

$object = (array)$data;

$ersetzung = array("\u0000", "*");

reset($object);
$first_key = key($object);
$object = $object[$first_key];
$mykey = $object["_key"];
 
//$key = $object["_key"];
foreach ($object as $key => $el) {
    if (is_array($el)&&(!empty($el))) {
        foreach($el as $image_key => $value) {
            $img = $value;
            $object[$key][$image_key] = array();
            $object[$key][$image_key]["url"] =  $page->image($img)->url();
        }
    }
  }
$json = json_encode($object);
?>


<iframe src="http://localhost:3000/extension" style="width:100%; height:500px;" id="<?= $mykey; ?>" class="preview"></iframe>
<script type="text/javascript">


var myIframe = document.getElementById('<?= $mykey; ?>');
 
window.addEventListener("message", resizeIframe, false);
function resizeIframe(e) {
    console.log(e);
    if(e.data==="0px") {
        myIframe.style.height = "500px";
    } else {
        myIframe.style.height = e.data;
    }
}

myIframe.addEventListener("load", function(e) {
    let json = {};
    json = <?= $json; ?>;

    myIframe.contentWindow.window.postMessage(json, "*");
});

</script>