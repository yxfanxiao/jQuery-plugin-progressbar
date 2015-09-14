# jQuery-plugin-progressbar

a simple jQuery plugin ---  dynamic loading progress bar

## screenshot
![](https://github.com/yxfanxiao/jQuery-plugin-progressbar/raw/master/screenshot.png)

## how to use
firstly, you need to download jQuery-plugin-progressbar.js & jQuery-plugin-progressbar.css 

####demo
``` javascript

<div class="progress-bar"></div>
<div class="progress-bar" data-percent="60" data-duration="1000" data-color="#ccc,yellow"></div>
<div class="progress-bar" data-percent="20" data-color="#a456b1,#12b321"></div>
<input type="submit" value="加载">
<script>
	$(".progress-bar").loading();				// you can load automatically
	$('input').on('click', function () {		// use some events to control the loading like this 
		 $(".progress-bar").loading();
	});
</script>

```

* when use you can change 4 parameters:
	* data-percent (百分比数)
	* data-duration (转圈的时长)
	* data-color (进度条背景颜色，进度条颜色)
* you can change default parameters in css.scss
	* $circle-size: 100px (圆的直径)
	* $background-color: #b3cef6 (进度条背景颜色)
	* $progress-color: #4b86db (进度条颜色)
	* $percent: 75 (百分比数)
	* $duration: 2s (转圈的时长)


## a problem
``` javascript

setTimeout(function () {	
	$rotate.css({
		'transition': 'transform ' + opts.duration + 'ms linear',
		'transform': 'rotate(' + opts.percent * 3.6 + 'deg)'
	});
},1);	

```

I use `setTimeout` here, if not, the `transiton` not work.<br>
Why here css executes at a moment?
