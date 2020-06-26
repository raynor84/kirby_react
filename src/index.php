<?php
function arrayToObject(array $array, $className) {
    return unserialize(sprintf(
        'O:%d:"%s"%s',
        strlen($className),
        $className,
        strstr(serialize($array), ':')
    ));
}
class JsonContent extends Kirby\Cms\Content {
    public function test() {
        echo "test";
    }
}
$object = (array)$data;
//$object = arrayToObject($data, "JsonContent");
//$object->test();
$json = json_encode($object);
?>
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

<script type="text/javascript">
    import Slide09 from "./slide/Slide09";
    ReactDOM.render(React.createElement(Slide09, { slide: "<?php echo $json; ?>" }), document.body);
</script>