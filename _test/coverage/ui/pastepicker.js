/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['ui/pastepicker.js']) {
  _$jscoverage['ui/pastepicker.js'] = [];
  _$jscoverage['ui/pastepicker.js'][3] = 0;
  _$jscoverage['ui/pastepicker.js'][4] = 0;
  _$jscoverage['ui/pastepicker.js'][9] = 0;
  _$jscoverage['ui/pastepicker.js'][10] = 0;
  _$jscoverage['ui/pastepicker.js'][11] = 0;
  _$jscoverage['ui/pastepicker.js'][13] = 0;
  _$jscoverage['ui/pastepicker.js'][15] = 0;
  _$jscoverage['ui/pastepicker.js'][16] = 0;
  _$jscoverage['ui/pastepicker.js'][19] = 0;
  _$jscoverage['ui/pastepicker.js'][34] = 0;
  _$jscoverage['ui/pastepicker.js'][37] = 0;
  _$jscoverage['ui/pastepicker.js'][38] = 0;
  _$jscoverage['ui/pastepicker.js'][41] = 0;
  _$jscoverage['ui/pastepicker.js'][45] = 0;
  _$jscoverage['ui/pastepicker.js'][46] = 0;
  _$jscoverage['ui/pastepicker.js'][48] = 0;
  _$jscoverage['ui/pastepicker.js'][50] = 0;
  _$jscoverage['ui/pastepicker.js'][51] = 0;
  _$jscoverage['ui/pastepicker.js'][52] = 0;
  _$jscoverage['ui/pastepicker.js'][54] = 0;
  _$jscoverage['ui/pastepicker.js'][55] = 0;
  _$jscoverage['ui/pastepicker.js'][60] = 0;
  _$jscoverage['ui/pastepicker.js'][61] = 0;
}
_$jscoverage['ui/pastepicker.js'].source = ["<span class=\"c\">///import core</span>","<span class=\"c\">///import uicore</span>","<span class=\"k\">(</span><span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","    <span class=\"k\">var</span> utils <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>utils<span class=\"k\">,</span>","        Stateful <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>ui<span class=\"k\">.</span>Stateful<span class=\"k\">,</span>","        uiUtils <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>ui<span class=\"k\">.</span>uiUtils<span class=\"k\">,</span>","        UIBase <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>ui<span class=\"k\">.</span>UIBase<span class=\"k\">;</span>","","    <span class=\"k\">var</span> PastePicker <span class=\"k\">=</span> baidu<span class=\"k\">.</span>editor<span class=\"k\">.</span>ui<span class=\"k\">.</span>PastePicker <span class=\"k\">=</span> <span class=\"k\">function</span> <span class=\"k\">(</span>options<span class=\"k\">)</span> <span class=\"k\">{</span>","        <span class=\"k\">this</span><span class=\"k\">.</span>initOptions<span class=\"k\">(</span>options<span class=\"k\">);</span>","        <span class=\"k\">this</span><span class=\"k\">.</span>initPastePicker<span class=\"k\">();</span>","    <span class=\"k\">}</span><span class=\"k\">;</span>","    PastePicker<span class=\"k\">.</span>prototype <span class=\"k\">=</span> <span class=\"k\">{</span>","        initPastePicker<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>initUIBase<span class=\"k\">();</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>Stateful_init<span class=\"k\">();</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        getHtmlTpl<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","            <span class=\"k\">return</span> <span class=\"s\">'&lt;div class=\"edui-pasteicon\" onclick=\"$$._onClick(this)\"&gt;&lt;/div&gt;'</span> <span class=\"k\">+</span>","                <span class=\"s\">'&lt;div class=\"edui-pastecontainer\"&gt;'</span> <span class=\"k\">+</span>","                <span class=\"s\">'&lt;div class=\"edui-title\"&gt;'</span> <span class=\"k\">+</span> <span class=\"k\">this</span><span class=\"k\">.</span>editor<span class=\"k\">.</span>getLang<span class=\"k\">(</span><span class=\"s\">\"pasteOpt\"</span><span class=\"k\">)</span> <span class=\"k\">+</span> <span class=\"s\">'&lt;/div&gt;'</span> <span class=\"k\">+</span>","                <span class=\"s\">'&lt;div class=\"edui-button\"&gt;'</span> <span class=\"k\">+</span>","                <span class=\"s\">'&lt;div title=\"'</span> <span class=\"k\">+</span> <span class=\"k\">this</span><span class=\"k\">.</span>editor<span class=\"k\">.</span>getLang<span class=\"k\">(</span><span class=\"s\">\"pasteSourceFormat\"</span><span class=\"k\">)</span> <span class=\"k\">+</span> <span class=\"s\">'\" onclick=\"$$.format(false)\" stateful&gt;'</span> <span class=\"k\">+</span>","                <span class=\"s\">'&lt;div class=\"edui-richtxticon\"&gt;&lt;/div&gt;&lt;/div&gt;'</span> <span class=\"k\">+</span>","                <span class=\"s\">'&lt;div title=\"'</span> <span class=\"k\">+</span> <span class=\"k\">this</span><span class=\"k\">.</span>editor<span class=\"k\">.</span>getLang<span class=\"k\">(</span><span class=\"s\">\"tagFormat\"</span><span class=\"k\">)</span> <span class=\"k\">+</span> <span class=\"s\">'\" onclick=\"$$.format(2)\" stateful&gt;'</span> <span class=\"k\">+</span>","                <span class=\"s\">'&lt;div class=\"edui-tagicon\"&gt;&lt;/div&gt;&lt;/div&gt;'</span> <span class=\"k\">+</span>","                <span class=\"s\">'&lt;div title=\"'</span> <span class=\"k\">+</span> <span class=\"k\">this</span><span class=\"k\">.</span>editor<span class=\"k\">.</span>getLang<span class=\"k\">(</span><span class=\"s\">\"pasteTextFormat\"</span><span class=\"k\">)</span> <span class=\"k\">+</span> <span class=\"s\">'\" onclick=\"$$.format(true)\" stateful&gt;'</span> <span class=\"k\">+</span>","                <span class=\"s\">'&lt;div class=\"edui-plaintxticon\"&gt;&lt;/div&gt;&lt;/div&gt;'</span> <span class=\"k\">+</span>","                <span class=\"s\">'&lt;/div&gt;'</span> <span class=\"k\">+</span>","                <span class=\"s\">'&lt;/div&gt;'</span> <span class=\"k\">+</span>","                <span class=\"s\">'&lt;/div&gt;'</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        getStateDom<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span>","            <span class=\"k\">return</span> <span class=\"k\">this</span><span class=\"k\">.</span>target<span class=\"k\">;</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        format<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">(</span>param<span class=\"k\">)</span> <span class=\"k\">{</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>editor<span class=\"k\">.</span>ui<span class=\"k\">.</span>_isTransfer <span class=\"k\">=</span> <span class=\"k\">true</span><span class=\"k\">;</span>","            <span class=\"k\">this</span><span class=\"k\">.</span>editor<span class=\"k\">.</span>fireEvent<span class=\"k\">(</span><span class=\"s\">'pasteTransfer'</span><span class=\"k\">,</span> param<span class=\"k\">);</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        _onClick<span class=\"k\">:</span><span class=\"k\">function</span> <span class=\"k\">(</span>cur<span class=\"k\">)</span> <span class=\"k\">{</span>","            <span class=\"k\">var</span> node <span class=\"k\">=</span> domUtils<span class=\"k\">.</span>getNextDomNode<span class=\"k\">(</span>cur<span class=\"k\">),</span>","                screenHt <span class=\"k\">=</span> uiUtils<span class=\"k\">.</span>getViewportRect<span class=\"k\">().</span>height<span class=\"k\">,</span>","                subPop <span class=\"k\">=</span> uiUtils<span class=\"k\">.</span>getClientRect<span class=\"k\">(</span>node<span class=\"k\">);</span>","","            <span class=\"k\">if</span> <span class=\"k\">((</span>subPop<span class=\"k\">.</span>top <span class=\"k\">+</span> subPop<span class=\"k\">.</span>height<span class=\"k\">)</span> <span class=\"k\">&gt;</span> screenHt<span class=\"k\">)</span>","                node<span class=\"k\">.</span>style<span class=\"k\">.</span>top <span class=\"k\">=</span> <span class=\"k\">(-</span>subPop<span class=\"k\">.</span>height <span class=\"k\">-</span> cur<span class=\"k\">.</span>offsetHeight<span class=\"k\">)</span> <span class=\"k\">+</span> <span class=\"s\">\"px\"</span><span class=\"k\">;</span>","            <span class=\"k\">else</span>","                node<span class=\"k\">.</span>style<span class=\"k\">.</span>top <span class=\"k\">=</span> <span class=\"s\">\"\"</span><span class=\"k\">;</span>","","            <span class=\"k\">if</span> <span class=\"k\">(</span><span class=\"s\">/hidden/ig</span><span class=\"k\">.</span>test<span class=\"k\">(</span>domUtils<span class=\"k\">.</span>getComputedStyle<span class=\"k\">(</span>node<span class=\"k\">,</span> <span class=\"s\">\"visibility\"</span><span class=\"k\">)))</span> <span class=\"k\">{</span>","                node<span class=\"k\">.</span>style<span class=\"k\">.</span>visibility <span class=\"k\">=</span> <span class=\"s\">\"visible\"</span><span class=\"k\">;</span>","                domUtils<span class=\"k\">.</span>addClass<span class=\"k\">(</span>cur<span class=\"k\">,</span> <span class=\"s\">\"edui-state-opened\"</span><span class=\"k\">);</span>","            <span class=\"k\">}</span> <span class=\"k\">else</span> <span class=\"k\">{</span>","                node<span class=\"k\">.</span>style<span class=\"k\">.</span>visibility <span class=\"k\">=</span> <span class=\"s\">\"hidden\"</span><span class=\"k\">;</span>","                domUtils<span class=\"k\">.</span>removeClasses<span class=\"k\">(</span>cur<span class=\"k\">,</span> <span class=\"s\">\"edui-state-opened\"</span><span class=\"k\">)</span>","            <span class=\"k\">}</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        _UIBase_render<span class=\"k\">:</span>UIBase<span class=\"k\">.</span>prototype<span class=\"k\">.</span>render","    <span class=\"k\">}</span><span class=\"k\">;</span>","    utils<span class=\"k\">.</span>inherits<span class=\"k\">(</span>PastePicker<span class=\"k\">,</span> UIBase<span class=\"k\">);</span>","    utils<span class=\"k\">.</span>extend<span class=\"k\">(</span>PastePicker<span class=\"k\">.</span>prototype<span class=\"k\">,</span> Stateful<span class=\"k\">,</span> <span class=\"k\">true</span><span class=\"k\">);</span>","<span class=\"k\">}</span><span class=\"k\">)();</span>","","","",""];
_$jscoverage['ui/pastepicker.js'][3]++;
(function () {
  _$jscoverage['ui/pastepicker.js'][4]++;
  var utils = baidu.editor.utils, Stateful = baidu.editor.ui.Stateful, uiUtils = baidu.editor.ui.uiUtils, UIBase = baidu.editor.ui.UIBase;
  _$jscoverage['ui/pastepicker.js'][9]++;
  var PastePicker = (baidu.editor.ui.PastePicker = (function (options) {
  _$jscoverage['ui/pastepicker.js'][10]++;
  this.initOptions(options);
  _$jscoverage['ui/pastepicker.js'][11]++;
  this.initPastePicker();
}));
  _$jscoverage['ui/pastepicker.js'][13]++;
  PastePicker.prototype = {initPastePicker: (function () {
  _$jscoverage['ui/pastepicker.js'][15]++;
  this.initUIBase();
  _$jscoverage['ui/pastepicker.js'][16]++;
  this.Stateful_init();
}), getHtmlTpl: (function () {
  _$jscoverage['ui/pastepicker.js'][19]++;
  return ("<div class=\"edui-pasteicon\" onclick=\"$$._onClick(this)\"></div>" + "<div class=\"edui-pastecontainer\">" + "<div class=\"edui-title\">" + this.editor.getLang("pasteOpt") + "</div>" + "<div class=\"edui-button\">" + "<div title=\"" + this.editor.getLang("pasteSourceFormat") + "\" onclick=\"$$.format(false)\" stateful>" + "<div class=\"edui-richtxticon\"></div></div>" + "<div title=\"" + this.editor.getLang("tagFormat") + "\" onclick=\"$$.format(2)\" stateful>" + "<div class=\"edui-tagicon\"></div></div>" + "<div title=\"" + this.editor.getLang("pasteTextFormat") + "\" onclick=\"$$.format(true)\" stateful>" + "<div class=\"edui-plaintxticon\"></div></div>" + "</div>" + "</div>" + "</div>");
}), getStateDom: (function () {
  _$jscoverage['ui/pastepicker.js'][34]++;
  return this.target;
}), format: (function (param) {
  _$jscoverage['ui/pastepicker.js'][37]++;
  this.editor.ui._isTransfer = true;
  _$jscoverage['ui/pastepicker.js'][38]++;
  this.editor.fireEvent("pasteTransfer", param);
}), _onClick: (function (cur) {
  _$jscoverage['ui/pastepicker.js'][41]++;
  var node = domUtils.getNextDomNode(cur), screenHt = uiUtils.getViewportRect().height, subPop = uiUtils.getClientRect(node);
  _$jscoverage['ui/pastepicker.js'][45]++;
  if (((subPop.top + subPop.height) > screenHt)) {
    _$jscoverage['ui/pastepicker.js'][46]++;
    node.style.top = (((- subPop.height) - cur.offsetHeight) + "px");
  }
  else {
    _$jscoverage['ui/pastepicker.js'][48]++;
    node.style.top = "";
  }
  _$jscoverage['ui/pastepicker.js'][50]++;
  if (/hidden/gi.test(domUtils.getComputedStyle(node, "visibility"))) {
    _$jscoverage['ui/pastepicker.js'][51]++;
    node.style.visibility = "visible";
    _$jscoverage['ui/pastepicker.js'][52]++;
    domUtils.addClass(cur, "edui-state-opened");
  }
  else {
    _$jscoverage['ui/pastepicker.js'][54]++;
    node.style.visibility = "hidden";
    _$jscoverage['ui/pastepicker.js'][55]++;
    domUtils.removeClasses(cur, "edui-state-opened");
  }
}), _UIBase_render: UIBase.prototype.render};
  _$jscoverage['ui/pastepicker.js'][60]++;
  utils.inherits(PastePicker, UIBase);
  _$jscoverage['ui/pastepicker.js'][61]++;
  utils.extend(PastePicker.prototype, Stateful, true);
})();
