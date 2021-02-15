function textOnFocus(obj)
{
    var img = obj.previousElementSibling;
    img.style.opacity = 0.596;
}
function textOnBlur(obj)
{
    var img = obj.previousElementSibling;
    img.style.opacity = 0.315;
}
function searchWtihBaidu(obj)
{

    if(event.which==13)
        window.open("https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&tn=baidu&wd=" + obj.value);

    
}