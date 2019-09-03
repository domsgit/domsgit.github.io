+function() {
    var log = console.log
    function CVS(options) {
      this.defaultOptions = {
        el: '#canvas',
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        VDotLineWidth: 6,
        VDotColor: '#ffffff',
        caches: {}
      }
      this.options = this.shallowMerge(this.defaultOptions, options) || {}
      CVS.prototype.defaultOptions = this.defaultOptions
      this.width = this.options.width
      this.height = this.options.height
      this.dom = null
      this.ctx = null
      this.init()
    }
    var _proto = CVS.prototype
    // ======================================== public function ========================================
    var type = _proto.type = function(target) {
      return Object.prototype.toString.call(target).slice(8, -1).toLowerCase()
    }
    var isObject = _proto.isObject = function(target) {
      return this.type(target) === 'object'
    }
    var isFn = _proto.isFn = function(target) {
      return typeof target === 'function'
    }
    var isArrayLike = _proto.isArrayLike = function(target) {
      var sType = type(target)
      if(sType === 'array' || sType === 'arguments') {
        return true
      }
      return false
    }
    var shallowMerge = _proto.shallowMerge = function(obj1, obj2) {
      if(!obj1) {
        return obj2
      }
      if(!obj2) {
        return obj1
      }
      if(typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return
      }
      // Object.assign polyfill
      // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
      if (typeof Object.assign != 'function') {
        // Must be writable: true, enumerable: false, configurable: true
        Object.defineProperty(Object, "assign", {
          value: function assign(target, varArgs) { // .length of function is 2
            'use strict';
            if (target == null) { // TypeError if undefined or null
              throw new TypeError('Cannot convert undefined or null to object');
            }

            let to = Object(target);

            for (var index = 1; index < arguments.length; index++) {
              var nextSource = arguments[index];

              if (nextSource != null) { // Skip over if undefined or null
                for (let nextKey in nextSource) {
                  // Avoid bugs when hasOwnProperty is shadowed
                  if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                    to[nextKey] = nextSource[nextKey];
                  }
                }
              }
            }
            return to;
          },
          writable: true,
          configurable: true
        });
      }
      return Object.assign(obj1, obj2)
    }
    var randomHexColor = _proto.randomHexColor = function() {
      return '#' + (~~(Math.random() * (1 << 24))).toString(16)
    }
    // 近似相等
    var isSimilar = _proto.isSimilar = function(source, target, lowestVal) {
      lowestVal = lowestVal || 0.0002
      if(Math.abs(source - target) <= lowestval) { return true } else false =="======================================" public function="=======================================" dot="=======================================" ** * constructor x, y: position vx, vy: initial velocity in x direction or y ax, ay: accelerated speed dot(x, y, vy, ay) var _x="Number(x" || 0) _y="Number(y" _vx="Number(vx" _vy="Number(vy" _ax="Number(ax" _ay="Number(ay" if(isnan(_x) isnan(_y) isnan(_vx) isnan(_vy) isnan(_ax) isnan(_ay)) throw new typeerror("dot constructor's arguments must be number value can transform value!") this.x="_x" this.y="_y" this.vx="_vx" this.vy="_vy" this.ax="_ax" this.ay="_ay" _proto.dot="Dot" linewidth="=======================================" linewidth(width, widthv, widtha) _width="Number(width" _proto.defaultoptions.vdotlinewidth) _widthv="Number(widthV" _widtha="Number(widthA" if(isnan(_width) isnan(_widthv) isnan(_widtha)) typeerror("linewidth a this.width="_width" this.v="_widthV" this.a="_widthA" _proto.linewidth="LineWidth" color="=======================================" color(color, israndom) _color="String(color)" if(type(_color) !="=" 'string') typeerror("color first argument string, string type!") if(type(israndom) 'boolean') second boolean!") this.color="color" this.israndom="isRandom" _proto.color="Color" linecap="=======================================" _proto.linecaps="['round'," 'butt', 'square'] vdot="=======================================" canvas vdot(dot, linewidth, dotcolor) if(!(dot instanceof dot)) typeerror(dot + " is not dot's instance!") if(linewidth linewidth) this.linewidth="lineWidth" this.size="lineWidth.width" this.vsize="lineWidth.v" this.asize="lineWidth.a" _linewidth="Number(lineWidth" if(isnan(_linewidth)) typeerror(linewidth linewidth(_linewidth, 0, if(dotcolor color) this.strokestyle="dotColor" _strokestyle="String(dotColor" _proto.defaultoptions.vdotcolor) if(type(_strokestyle) typeerror("vdot third color(_strokestyle, false) this.dot="dot" _proto.vdot="VDot" vdot.prototype.render="function(cvsInstance)" ctx="cvsInstance.ctx" ctx.linecap="_proto.lineCaps[0]" ctx.linewidth="this.size" ctx.strokestyle="this.color" ctx.beginpath() ctx.moveto(this.x, this.y) ctx.lineto(this.x, ctx.stroke() ctx.closepath() if(this.mutation && isfn(this.mutation)) this.mutation() this._mutation(cvsinstance) vdot.prototype._mutation="function(cvsInstance)" width="cvsInstance.width" height="cvsInstance.height" isboundary="this.isBoundary(cvsInstance)" if(isboundary -1) if(isboundary.indexof('l')> -1 || isBoundary.indexOf('r') > -1) {
          this.vx *= -1
        }
        if(isBoundary.indexOf('t') > -1 || isBoundary.indexOf('b') > -1) {
          this.vy *= -1
        }
      }

      this.vx = this.vx + this.ax
      this.vy = this.vy + this.ay
      this.x = this.x + this.vx + (this.ax >> 1)
      this.y = this.y + this.vy + (this.ay >> 1)

      if(this.size > _width || this.size <= 0) { this.vsize *="-1" } this.size="this.size" + (this.asize>> 1)

      if(this.isRandom) {
        this.color = _proto.randomHexColor()
      }
    }

    VDot.prototype.getInitialSize = function() {
      return this.lineWidth.width
    }

    /**
     * 是否碰到边界，相切的情况，比屏幕大的情况不考虑，false为在屏幕内，-1为在屏幕外，
     * 't'为碰到上边界，'b'为碰到下边界，'l'为碰到左边界，'r'为碰到右边界
     * 'tl'为碰到上左边界，'tr'上右，'rb'右下，'bl'下左
     */
    VDot.prototype.isBoundary = function(cvsInstance) {
      var width = cvsInstance.width
      var height = cvsInstance.height

      var lx = this.x - this.size
      var rx = this.x + this.size
      var ty = this.y - this.size
      var by = this.y + this.size

      if(rx < width && lx > 0 && ty > 0 && by < height) {
        return false
      } else {
        if(lx > width || rx < 0 || ty > height || by < 0) {
          return -1
        } else {
          var str = ''
          if(ty < 0 && by > 0) {
            str += 't'
          }
          if(lx < width && rx > width) {
            str += 'r'
          }
          if(ty < height && by > height) {
            str += 'b'
          }
          if(lx < 0 && rx > 0) {
            str += 'l'
          }
          return str
        }
      }
    }
    // ======================================== VDot ========================================


    // ======================================== Segment ========================================
    function Segment(dot1, dot2) {
      if(!(dot1 instanceof Dot)) {
        throw new TypeError(dot1 + " is not Dot's instance!")
      }
      if(!(dot2 instanceof Dot)) {
        throw new TypeError(dot2 + " is not Dot's instance!")
      }
      if(dot1.x === dot2.x && dot1.y === dot2.y) {
        throw new Error("Segment constructor can't pass with two same position dot!")
      }
      this.start = this.startDot = dot1
      this.end = this.endDot = dot2
    }

    _proto.Segment = Segment

    Segment.prototype.gradient = function() {
      var _denominator = this.end.x - this.start.x
      var _numerator  = this.end.y - this.start.y
      // parallel y
      if(_denominator === 0) {
        return Infinity
      }
      return _numerator / _denominator
    }

    Segment.prototype.render = function(cvsInstance) {
      var ctx = cvsInstance.ctx
      ctx.lineWidth = Math.floor(Math.random() * 10)
      ctx.strokeStyle = _proto.randomHexColor()
      ctx.lineCap = _proto.lineCaps[0]
      ctx.beginPath()
      ctx.moveTo(this.start.x, this.start.y)
      ctx.lineTo(this.end.x, this.end.y)
      ctx.stroke()

      if(this.mutation && isFn(this.mutation)) {
        this.mutation()
      } else {
        this._mutation(cvsInstance)
      }
    }

    Segment.prototype._mutation = function() {

    }
    // ======================================== Segment ========================================

    // 校验传参 是否符合标准
    var _checkLineCoordinate = function(line) {
      for(var i = 0, len = line.length; i < len; i++) {
        var item = line[i]
        if(type(item) !== 'number') {
          if(isNaN(+item)) {
            throw new Error("参数" + item + "错误，不是数值类型也不可以转成数值类型！")
          }
        }
      }
    }
    // 根据两坐标求得线段的斜率
    var _getLineGradient = function(line) {
      try {
        _checkLineCoordinate(line)
      } catch(e) {
        throw new Error(e.message)
      }
      var numerator = line[1] - line[3]
      if(line[2] === line[0]) { // 平行y轴
        return Infinity * (numerator / Math.abs(numerator))
      }
      return numerator / (line[2] - line[0])
    }
    // 根据两坐标求得线段的斜率
    _proto.getLineGradient = function() {
      var len = arguments.length
      if(len < 1) {
        throw new Error("参数错误，参数不能为空！")
      }else if(len === 1) {
        var arr = arguments[0]
        var llen = arr.length
        if(!isArrayLike(arr)) {
          throw new Error("参数错误，传入一个参数时，必须传入类数组！")
        }
        if(isArrayLike(arr[0]) && isArrayLike(arr[1])) {
          return _getLineGradient(arr[0].concat(arr[1]))
        }
        if(llen < 4) {
          throw new Error("参数需要传入线段的开始坐标和结束坐标！")
        }
        return _getLineGradient(arr)
      } else if(len >= 2 && len < 4) {
        if(isArrayLike(arguments[0]) && isArrayLike(arguments[1])) {
          return _getLineGradient(arguments[0].concat(arguments[1]))
        } else {
          throw new Error("参数错误，传入两个参数的时候，必须传入两个类数组的坐标！")
        }
      }
      return _getLineGradient(arguments)
    }
    // 判断 所有线段 是否平行
    _proto.isLinesParallel = function() {
      var len = arguments.length
      for(var i = 0; i < len; i++) {
        var item = arguments[i]
        if(this.type(item) !== 'array') {
          throw new Error("参数错误，不能传入非数组！")
        }

        if(len === 1) {
          // item: [[line1-start-x, line1-start-y, line1-end-x, line1-end-y], [line2-start-x, line2-start-y, line2-end-x, line2-end-y]]
          if(this.type(item) !== 'array') {
            throw new Error("参数错误，不能传入非数组！")
          }
          var iLen = item.length
          if(iLen < 2) {
            throw new Error("参数需要传入线段的开始坐标和结束坐标！")
          }
          var line0 = item[0]
          var k = _proto.getLineGradient(line0)
          for(var j = 1; j < iLen; j++) {
            if(_proto.getLineGradient(item[j]) !== k) {
              return false
            }
          }
        } else {
          // arguments: [line1-start-x, line1-start-y, line1-end-x, line1-end-y], [line2-start-x, line2-start-y, line2-end-x, line2-end-y]
          // item: [line1-start-x, line1-start-y, line1-end-x, line1-end-y]
          if(i !== 0 && _proto.getLineGradient(item) !== _proto.getLineGradient(arguments[0])) {
            return false
          }
        }
      }
      return true
    }
    // 判断 两线段 是否在同一条直线上
    _proto.isTwoLinesInOneStraightLine = function() {
      if(arguments.length < 2) {
        throw new Error("参数需要传入两条线段的坐标！")
      }
      var args = arguments
      var line0 = args[0]
      if(_proto.isLinesParallel.apply(this, args) && _proto.getLineGradient(line0) === _proto.getLineGradient(line0[0], line0[1], args[1][0], args[1][1])) {
        return true
      }
      return false
    }
    // 判断 所有线段 是否在同一条直线上
    _proto.isLinesInOneStraightLine = function() {
      var len = arguments.length
      if(len < 2) {
        throw new Error("参数需要至少传入两条线段的坐标！")
      }
      for(var i = 1; i < len; i++) {
        if(!_proto.isTwoLinesInOneStraightLine(arguments[0], arguments[i])) {
          return false
        }
      }
      return true
    }
    // 根据两个坐标点获取 斜率 和 x = 0时y的值w
    var _linearEquation = function() {
      var len = arguments.length
      var k = null
      var w = null
      if(len < 1) {
        throw new Error("参数错误，必须传入两个坐标点！")
      }else if(len > 1) {
        var point1 = arguments[0]
        var point2 = arguments[1]
        k = _proto.getLineGradient(point1[0], point1[1], point2[0], point2[1])
        w = point1[1] - point1[0] * k
      } else {
        var points = arguments[0]
        if(points.length === 2 && isArrayLike(points[0]) && isArrayLike(points[1])) {
          k = _proto.getLineGradient(points)
          w = points[0][1] - points[0][0] * k
        } else {
          k = _proto.getLineGradient(points)
          w = points[1] - points[0] * k
        }
      }

      if(k === Infinity || k === -Infinity) {
        throw new Error("两个点x坐标不能相等！")
      }
      return {
        k: k,
        w: w
      }
    }
    // 根据两个坐标点获取y=kx + w线性方程
    _proto.getLinearEquation = function() {
      var kw = _linearEquation(arguments)
      return function(x) {
        return kw.k * x + kw.w
      }
    }
    // 根据两个坐标点获取x = ky + w线性方程
    _proto.getLinearEquationReverse = function() {
      var kw = _linearEquation(arguments)
      return function(y) {
        return (y - kw.w) / kw.k
      }
    }
    // 判断某点是否在线段上
    _proto.isDotInLine = function(point, line) {
      return _proto.getLinearEquation([line[0], line[1]], [line[2], line[3]])(point[0]) === point[1]
    }
    // 判断两线是否相交
    _proto.isLineIntersect = function(line1, line2) {
      var len = arguments.length
      if(len < 2) {
        throw new Error("参数需要至少传入两条线段的坐标！")
      }
      var kw1 = _linearEquation(line1)
      var kw2 = _linearEquation(line2)
      // 两线平行 或 重合
      if(kw1.k === kw2.k) {
        return false
      }
      // 相交点坐标
      var x = (kw2.w - kw1.w) / (kw1.k - kw2.k)
      var y = kw1.k * x + kw1.w
      if(_proto.isDotInLine([x, y], line1)) {
        return [_proto.toNormalNumber(x), _proto.toNormalNumber(y)]
      }
      return false
    }
    // 某些经过换算后的坐标会出现相近值，需要手动调整成准确值
    _proto.toNormalNumber = function(target) {
      var intedVal = Math.round(target)
      if(parseFloat(target.toFixed(4)) === intedVal) {
        return intedVal
      }
      return target
    }

    // 获取两圆相对的元信息
    var _getTwoCircleRelation = function(circle1, circle2) {
      var dpow2 = (circle2.x - circle1.x) ** 2 + (circle2.y - circle1.y) ** 2
      var rppow2 = (circle2.r + circle1.r) ** 2
      var rmpow2 = (circle2.r - circle1.r) ** 2
      return {
        dpow2: dpow2,
        rppow2: rppow2,
        rmpow2: rmpow2
      }
    }
    // 判断两个圆是否是同一个圆
    _proto.isCirclesSome = function(circle1, circle2) {
      // return circle1.r === circle2.r && circle1.x === circle2.x && circle1.y === circle2.y
      return isSimilar(circle1.r, circle2.r) && isSimilar(circle1.x, circle2.x) && isSimilar(circle1.y, circle2.y)
    }
    // 判断两个圆是否是同心圆(不同的圆)
    _proto.isCirclesInSomeCentreDot = function(circle1, circle2) {
      // return circle1.x === circle2.x && circle1.y === circle2.y && !_proto.isCirclesSome(circle1, circle2)
      return isSimilar(circle1.x, circle2.x) && isSimilar(circle1.y, circle2.y) && !_proto.isCirclesSome(circle1, circle2)
    }
    // 判断两个圆是否相离
    _proto.isCirclesInDisjoint = function(circle1, circle2) {
      var relation = _getTwoCircleRelation(circle1, circle2)
      // return relation.dpow2 > relation.rppow2
      return !isSimilar(relation.dpow2, relation.rppow2) && relation.dpow2 > relation.rppow2
    }
    // 判断两个圆是否外切
    _proto.isCirclesInOuterTangency = function(circle1, circle2) {
      var relation = _getTwoCircleRelation(circle1, circle2)
      // return relation.dpow2 === relation.rppow2
      return isSimilar(relation.dpow2, relation.rppow2)
    }
    // 判断两个圆四否内切
    _proto.isCirclesInInnerTangency = function(circle1, circle2) {
      var relation = _getTwoCircleRelation(circle1, circle2)
      // return relation.dpow2 === relation.rmpow2
      return isSimilar(relation.dpow2, relation.rmpow2)
    }
    // 判断两个圆是否包含关系(不同的圆)
    _proto.isCirclesInContain = function(circle1, circle2) {
      var relation = _getTwoCircleRelation(circle1, circle2)
      // return Math.sqrt(relation.dpow2) + Math.min(circle1.r, circle2.r) < Math.max(circle1.r, circle2.r)
      var flag = Math.sqrt(relation.dpow2) + Math.min(circle1.r, circle2.r) - Math.max(circle1.r, circle2.r)
      return !isSimilar(flag, 0) && flag < 0
    }
    // 判断两个圆是否相交
    _proto.isCirclesInIntersect = function(circle1, circle2) {
      var relation = _getTwoCircleRelation(circle1, circle2)
      // return relation.dpow2 > relation.rmpow2 && relation.dpow2 < relation.rppow2
      return !isSimilar(relation.dpow2, relation.rmpow2) && !isSimilar(relation.dpow2, relation.rppow2) && relation.dpow2 > relation.rmpow2 && relation.dpow2 < relation.rppow2
    }

    _proto.assert = function(target, assertBe) {
      if(arguments.length === 1) {
        if(!target) {
          throw new Error(target + ' should be true!')
        }
      }else {
        if(target !== assertBe) {
          throw new Error(target + ' should equal to ' + assertBe)
        }
      }
    }

    var _reLoad = function() {
      this.options.onBeforeReload && isFn(this.options.onBeforeReload) && this.options.onBeforeReload.call(this)
      window.location.reload()
      this.options.onAfterReload && isFn(this.options.onAfterReload) && this.options.onAfterReload.call(this)
    }

    _proto.init = function() {
      this.options.onInit && isFn(this.options.onInit) && this.options.onInit(this)
      this.dom = document.querySelector(this.options.el)
      if(!this.dom) {
        throw new Error("没有找到dom节点为：" + this.options.el + "的元素！")
      }
      if(this.dom.nodeType !== 1 || this.dom.nodeName !== 'CANVAS') {
        throw new Error("请使用canvas创建元素！")
      }
      if(!this.dom.getContext || !this.isFn(this.dom.getContext)) {
        throw new Error("你的游览器不支持canvas，请升级浏览器！")
      }
      this.dom.width = this.options.width
      this.dom.height = this.options.height
      this.ctx = this.dom.getContext('2d')

      this.options.onContextCreate && isFn(this.options.onContextCreate) && this.options.onContextCreate.call(this)
      this.initDatas = this.options.onContextConfig && isFn(this.options.onContextConfig) && this.options.onContextConfig.call(this) || {}

      var _render = this.options.onRender
      var _caches = this.options.caches
      var _renders = function() {
        if(!isFn(_render)) {
          throw new Error("onRender life cycle must be a function!")
        }

        var _times = this.options.times
        if(_times !== undefined) {
          if(isNaN(+_times)) {
            throw new Error("times不能为转为数字！")
          } else {
            for(let i = 0; i < _times; i++) {
              var _cacheName = this.options.cacheName
              var _cachedItem = _render.call(this, i, _caches[_cacheName])
              if(_cacheName) {
                if(_caches[_cacheName]) {
                  if(_caches[_cacheName].length < _times) {
                    _caches[_cacheName].push(_cachedItem)
                  }
                } else {
                  _caches[_cacheName] = [_cachedItem]
                }
              }
            }
          }
        } else {
          var _cachedItem = _render.call(this, _caches[_cacheName])
          if(_cacheName) {
            _caches[_cacheName] = _cachedItem
          }
        }
      }
      isFn(_render) && _renders.call(this)

      var _flag = this.options.isAnimation
      if(this.options.onAnimation && isFn(this.options.onAnimation)) {
        _flag = this.options.onAnimation.call(this)
      }

      var _innerRender = function() {
        _flag && (function(_this_) {
          window.requestAnimationFrame(_innerRender.bind(_this_))
          _this_.ctx.clearRect(0, 0, _this_.options.width, _this_.options.height)
          _renders.call(_this_)
        }(this))
      }
      _innerRender.call(this)

      window.removeEventListener('resize', _reLoad.bind(this))
      window.addEventListener('resize', _reLoad.bind(this))
    }

    var _CVS = window.CVS
    CVS.noConflict = function() {
      if(window.CVS === CVS) {
        window.CVS = _CVS
      }
      return CVS
    }

    window.CVS = CVS
}()
</=></=>