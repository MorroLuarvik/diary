// Qaop/JS Copyright by Jan Bobrowski 2011-2020
function script(n, t) {
    var i = $("head")
      , u = i.appendChild($e("script"));
    u.onload = function() {
        i.removeChild(u),
        t && t()
    }
    ,
    u.src = n
}
function request(c, f, n) {
    var t, r = !(f = f || {}).nopb;
    if (c.data)
        return c.eof = 1,
        a();
    if (t = c.file) {
        c.type || (c.type = t.type),
        c.name || (c.name = t.name);
        var i = new FileReader;
        return (e = i.readAsArrayBuffer) ? e.call(i, t) : i.readAsBinaryString(t),
        void (i.onloadend = function() {
            c.data = i.result,
            e && (c.data = new Uint8Array(c.data)),
            c.eof = 1,
            a()
        }
        )
    }
    var e = {};
    function u() {
        var n = {};
        f.acc && (n.headers = {
            Accept: f.acc
        }),
        fetch(c.url, n).then(function(n) {
            if (c.type = c.type || n.headers.get("Content-Type"),
            n.status && 200 != n.status)
                return s(n.statusText);
            c.url = n.url;
            var u = +n.headers.get("Content-Length");
            if (e.t = u,
            e.b = 0,
            f.text)
                n.text().then(function(n) {
                    v((c.data = n).length)
                });
            else {
                if (n.body) {
                    var t = n.body.getReader();
                    return o()
                }
                n.arrayBuffer().then(function(n) {
                    n = new Uint8Array(n),
                    v((c.data = n).length)
                })
            }
            function o() {
                return t.read().then(i)
            }
            function i(n) {
                var t = n.done
                  , i = n.value;
                if (i && (e.b += i.length,
                function(n) {
                    var t, i, u, o, f;
                    t = c.data,
                    u = c.pos,
                    t && (i = t.length,
                    o = i - u) && ((f = new Uint8Array(o + n.length)).set(t.subarray(u, i)),
                    f.set(n, o),
                    n = f);
                    c.data = n,
                    c.pos = 0
                }(i),
                r && (e.t = e.b < u ? u : e.b + 9999,
                ui.progress(e))),
                !t)
                    return a(),
                    o();
                v(e.b)
            }
        }).catch(function(n) {
            s(n)
        })
    }
    function a() {
        n && n(c)
    }
    function v(n, t) {
        c.eof = e.e = 1,
        e.t = e.b = n,
        r && ui.progress(e),
        t && (c.data = null,
        ui.msg(t)),
        a()
    }
    function s(n) {
        v(1, n || "Error")
    }
    this.fetch ? u() : script("qaop/fetch.js", u)
}
!function() {
    function t(u) {
        var n, o = [];
        if (!function(n) {
            for (var t in n) {
                var i = n[t];
                o[i] = 255 & u[t],
                t.match(/.[a-z]/) && (o[i + 1] = u[t] >> 8)
            }
        }({
            a: 0,
            f: 1,
            bc: 2,
            hl: 4,
            pc: 32,
            sp: 8,
            i: 10,
            r: 11,
            de: 13,
            bc_: 15,
            de_: 17,
            hl_: 19,
            a_: 21,
            f_: 22,
            iy: 23,
            ix: 25
        }),
        o[12] = u.r >> 7 & 1 | u.border << 1 | 32,
        n = u.iff,
        o[27] = 1 & n,
        o[28] = 2 & n && (u.halted ? 118 : 1),
        o[29] = 80 | u.im,
        n = u.model,
        o[34] = n ? 5 == n ? 9 : 3 : u.tc2048 | u.pFF ? 14 : 0,
        o[35] = u.p7FFD,
        o[36] = 0 | u.pFF,
        n = 3,
        u.ay) {
            for (o[38] = u.ay.idx,
            n = 0; n < 16; n++)
                o[39 + n] = u.ay.reg[n];
            n = 7
        }
        o[37] = n,
        o.length = 32 + (o[30] = 23);
        var e = String.fromCharCode
          , a = e.apply(0, o);
        if (u.model) {
            var t, i = 5 | u.p7FFD >> 2 & 2;
            for (f(3 + i, i),
            t = 0; t < 8; t++)
                t != i && f(t + 3, t)
        } else
            f(8, 5),
            f(4, 2),
            f(5, 0);
        return (o = u.rom) && c(1, o, 0),
        a;
        function f(n, t) {
            c(n, u.ram[t], 0)
        }
        function c(n, t, i) {
            var u, o, f, c = i + 16384, r = "";
            do {
                for (u = t[i],
                o = 1; t[++i] === u && o < 255; )
                    o++;
                if (f = e(u),
                4 < o || 237 == u && 1 < o)
                    r += "\xed\xed" + e(o) + f;
                else {
                    for (; r += f,
                    --o; )
                        ;
                    237 == u && i < c && (r += e(t[i++]))
                }
            } while (i < c);o = r.length,
            a += e(255 & o, o >> 8, n) + r
        }
    }
    function hn(n, t, i) {
        var u, o, f = n.className;
        for (null == f && (f = (n = $(n)).className),
        f = (f + "").split(" "),
        i = "+-"[+(null != i && !i)]; o = (t = t.match(/([-+])?(\S+)\s*(.*)/))[1] || i,
        (u = f.indexOf(t[2])) < 0 ? "-" == o || f.push(t[2]) : "+" == o || f.splice(u, 1),
        t = t[3]; )
            ;
        return n.className = f.join(" "),
        n
    }
    function mn(n, t) {
        return n.matches ? n.matches(t) : n.webkitMatchesSelector ? n.webkitMatchesSelector(t) : n.msMatchesSelector(t)
    }
    function wn(n) {
        var t = document
          , i = t.activeElement
          , u = n.scrollIntoViewIfNeeded;
        if (u)
            return u.call(n);
        i == n ? i.blur() : (n.focus(),
        t.activeElement != n && (n.tabIndex = -1,
        n.focus(),
        delete n.tabIndex,
        n.removeAttribute("tabindex"))),
        i.focus()
    }
    emu = function() {
        var o, k, f, s, h = {
            speed: 1
        }, c = ["load"];
        h.init = function(n, t, i) {
            h.zx = k = new t(i),
            k.rom48k = n.shift(),
            k.rom128 = n,
            k.init(),
            f = window.requestAnimationFrame;
            try {
                !function(n) {
                    var t = this.AudioContext || this.webkitAudioContext;
                    if (!t)
                        throw "No audio";
                    var i = new t
                      , u = i.createScriptProcessor(2048, 0, 1);
                    u.connect(i.destination);
                    var o = {
                        hz: i.sampleRate,
                        v: new Float32Array(8192),
                        s: 0,
                        p: 0,
                        k: 8191
                    };
                    u.onaudioprocess = function(l) {
                        var d = 0
                          , b = 0
                          , n = l.hz
                          , p = Math.pow(2, -35e5 / (700 * n))
                          , k = Math.pow(2, -35e5 / (23256 * n));
                        return function(n) {
                            emu.h = void 0;
                            var t, i = n.outputBuffer.getChannelData(0), u = l.v, o = l.s, f = l.k, c = i.length, r = l.p - o & f, e = c < r ? c : r, a = d, v = b, s = 0;
                            if (0 < e)
                                for (; t = a + u[o],
                                o = o + 1 & f,
                                a = p * t,
                                i[s++] = v = k * (v + t - a),
                                --e; )
                                    ;
                            if (l.s = o,
                            0 < (e = c - r) && (v || a))
                                for (; t = a,
                                a *= p,
                                i[s++] = v = k * (v + t - a),
                                --e; )
                                    ;
                            b = v,
                            d = a
                        }
                    }(o),
                    console.log(u),
                    n(o),
                    emu.h = function() {
                        emu.h = void 0,
                        i.resume()
                    }
                }(k.audio),
                h.m = 1
            } catch (n) {
                ui.msg(n)
            }
        }
        ;
        var l, r, w, d = [], b = [, , , 18247, , , , , 17476, 20303, , , , 1542, , , 0, 3855, 3855, , , , , , , , , 17219, , , , , 1799, , , , 17219, 25443, 23644, 21588, 25700, , , , , , , , 1028, 771, 2827, 4883, 6939, 8995, 9252, 7196, 5140, 3084, , 34957, , 38542, , , , 257, 10023, 6168, 4369, 4626, 6425, 8481, 9766, 5397, 7710, 5654, 3598, 5911, 7967, 3341, 1285, 514, 6682, 2313, 8738, 7453, 8224, 2570, 4112, 9509, 2056, 0, 3855, , , , , , , , , , , , , , 42919, 38550, , 40606, , 41120, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 33950, , , , , , , , , , , , , 34957, 38542, 39583, 33950, 41623, 39072, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , 34204];
        function e(n) {
            if (n = n ? 0 : 2,
            w)
                k.frame(n),
                i();
            else {
                for (var t = h.speed; t--; )
                    l && l(),
                    k.frame(t ? 1 : 5 | n);
                h.tape && i()
            }
        }
        function i() {
            var i, n, u, o = w, f = k.cpu.getState();
            if (!(1 & f.iff || (n = f.pc) < 1387 || 1540 < n)) {
                f = k.getState(2);
                var c = [k.rom48k, f.ram[5], f.ram[2], f.ram[7 & f.p7FFD]];
                if (o)
                    i = o.pos,
                    u = o.data.length;
                else {
                    if (!(16 & f.p7FFD))
                        return;
                    if (1507 <= n && 1510 == (n = d()) && (n = d()),
                    n < 1387 || 1403 <= n)
                        return;
                    if (o = h.tape,
                    u = o.data.length,
                    o.blk |= 0,
                    o.eof && o.blk >= u && (o.blk = 0),
                    (i = o.blk + 2) <= u)
                        o.blk = i + (l(i - 2) | l(i - 1) << 8);
                    else if (!o.eof)
                        return;
                    w = o,
                    f.a = f.a_,
                    f.f = f.f_,
                    f.pc = n,
                    f.hl &= 255
                }
                for (var r = 255 & f.hl, e = f.hl >> 8 & 255, a = f.ix, v = f.a, s = f.f; ; ) {
                    if (i == o.blk)
                        return t(80);
                    if (u <= i) {
                        if (o.eof)
                            return t(80);
                        break
                    }
                    if (r = l(i++),
                    e ^= r,
                    !f.de)
                        return t((v = e) < 1 | v - 1 & 128 | !(v - 1) << 6 | !(15 & v) << 4 | 2);
                    if (64 & s) {
                        if (1 & s)
                            p(a, r);
                        else if (v = b(a) ^ r)
                            return t(0);
                        a = a + 1 & 65535,
                        f.de--
                    } else {
                        if (v ^= r)
                            return t(0);
                        s |= 64
                    }
                }
                return t(-1)
            }
            function t(n) {
                var t;
                f.ix = a,
                f.hl = e << 8 | r,
                f.a = v,
                0 <= n && (s = n,
                f.pc = d(),
                w = null,
                (t = h.next_tape) && o.eof && i == u && (h.tape = t)),
                f.f = s,
                k.setState(f),
                o.pos = i
            }
            function l(n) {
                var t = o.data;
                return 255 & (t.charCodeAt ? t.charCodeAt(n) : t[n])
            }
            function d() {
                var n = f.sp;
                return f.sp = n + 2 & 65535,
                b(n) | b(n + 1 & 65535) << 8
            }
            function b(n) {
                return c[n >> 14][16383 & n]
            }
            function p(n, t) {
                16383 < (n &= 65535) && (c[n >> 14][16383 & n] = t)
            }
            w = null
        }
        h.kbd = function(n, t, i) {
            if (n == s || n === +n) {
                for (var u = 0; u < 8; u++)
                    k.keyboard[u] = 255;
                l = null,
                n == s ? d = [] : function(n, t, i) {
                    var u, o, f = k.keyboard;
                    n: {
                        for (u = 0; u < d.length; u++)
                            if (n == d[u]) {
                                t || d.splice(u, 1);
                                break n
                            }
                        t && d.push(n)
                    }
                    for (u = 0; u < d.length; u++) {
                        if ((o = d[u]) < 0) {
                            if (null == (o = b[~o]))
                                continue;
                            switch (1 & i && (o >>= 8),
                            (o &= 255) >> 6) {
                            case 1:
                                f[0] &= 254,
                                f[7] |= 2;
                                break;
                            case 2:
                                f[7] &= 253,
                                f[0] |= 1
                            }
                        }
                        f[7 & o] &= ~(1 << (o >> 3 & 7))
                    }
                }(n, t, i)
            } else
                o = n,
                a = e = r = 0,
                v = k.keyboard,
                l = function() {
                    if (!r) {
                        if (e == o.length)
                            return void (l = null);
                        if (!(c = 1 + "aq10p\n zsw29ol xde38ikmcfr47ujnvgt56yhb AQ  P  ZSW  OL XDE  IKMCFR  UJNVGT  YHB   !_\"  :  @);= \xa3  #( +.? <$' -,/ >%& ^* ~   \xa9   |       \\       {   ]   }   [".indexOf(o[e++])))
                            return;
                        3 == (c = (c - (f = c % 40)) / 40) && (a ^ c ? (e--,
                        f = 0) : c--),
                        a = c,
                        v[0] = 254 | 1 & a ^ 1,
                        v[7] = 253 | 2 & a ^ 2,
                        v[7 & f] &= ~(1 << (f >> 3)),
                        r = 5
                    }
                    3 == --r && (v[7 & f] |= 1 << (f >> 3))
                }
                ;
            var o, f, c, r, e, a, v
        }
        ,
        h.stop = function(n, t) {
            var i = c
              , u = i.indexOf(n);
            if (t) {
                if (~u)
                    return;
                i.length || f || clearInterval(o),
                i.push(n)
            } else {
                if (null == t)
                    return 0 <= u;
                if (u < 0)
                    return;
                if (i.splice(u, 1),
                i.length)
                    return;
                f ? o || (o = 1,
                function t(i) {
                    f(function(n) {
                        return c.length ? o = 0 : n < i ? t(i) : (n < i + 20 ? n = i : n < i + 40 && (e(1),
                        n = i + 20),
                        e(),
                        void t(n + 20))
                    })
                }()) : o = setInterval(e, 20)
            }
        }
        ,
        h.canvas = function(n, t) {
            var i = k.dim
              , u = 1 + (t >= 2 * i[1]);
            u != r && (r = u,
            n.width = i[0],
            n.height = u * i[1]),
            k.canvas(n, u)
        }
        ,
        h.reset = function() {
            k.setState({
                rom: null,
                ay: ""
            }),
            k.reset()
        }
        ;
        var u = {};
        function p(n, t, i) {
            if (i && u[n] && u[n].abort(),
            u[n] = t)
                switch (n) {
                case "tape":
                    w = null;
                    break;
                case "snap":
                    h.stop(n, 0)
                }
        }
        function $(n, t) {
            var i;
            if (n = n.toLowerCase(),
            t)
                n = (i = n.match(/\S\.(\w{3})$/)) && i[1];
            else if (3 < n.length && (n = (i = n.match(/^(application|image)\/(x\.zx\.|x-spectrum-)([-.a-z0-9]+)/)) && i[3]) && "i" == i[1][0] && "scr" != n)
                return;
            if ("slt" == n && (n = "z80"),
            n && ~["rom", "sna", "z80", "tap", "scr"].indexOf(n))
                return n
        }
        function y(n) {
            return 1 - /^48k?$|^0$/i.test(n)
        }
        return h.load = function(i, n, u) {
            var o, f, c, r, e;
            function a() {
                h.tape = {
                    data: n.data,
                    pos: 0
                },
                c = function() {
                    h.tape.data = n.data
                }
                ,
                r = function() {
                    h.tape.eof = 1
                }
            }
            function v(n) {
                ui.progress({
                    tap: "#0C3",
                    rom: "#D04"
                }[n] || "#06F")
            }
            "string" == typeof n ? n = {
                url: n
            } : window.File && n instanceof File && (n = {
                file: n
            }),
            "tape" == i && a(),
            e = request(n, {}, function(n) {
                if (!c) {
                    if (n.type && v(o = $(n.type)),
                    !n.data)
                        return p(i);
                    if (o || v(o = $(n.name || n.url, 1)),
                    "rom" == o || "sna" == o || "z80" == o || "scr" == o)
                        v(o),
                        h.stop("snap", 1),
                        f = {
                            ram: (f = k.getState(2)).ram
                        },
                        c = function(a, u, n) {
                            u.pos |= 0;
                            var v = []
                              , i = {
                                sna: [function() {
                                    l(),
                                    p({
                                        bc: 13,
                                        de: 11,
                                        hl: 9,
                                        ix: 17,
                                        iy: 15,
                                        bc_: 5,
                                        de_: 3,
                                        hl_: 1,
                                        a: 22,
                                        f: 21,
                                        a_: 8,
                                        f_: 7,
                                        sp: 23,
                                        i: 0,
                                        r: 20
                                    }),
                                    a.im = v[25],
                                    a.iff = 4 & v[19] ? 3 : 0,
                                    a.border = 7 & v[26],
                                    64 & v[26] && (a.ay = !0);
                                    return [o(5), o(2), o(0), d, t]
                                }
                                , s(v, 0, 27)],
                                z80: [function() {
                                    l(),
                                    p({
                                        a: 0,
                                        f: 1,
                                        bc: 2,
                                        hl: 4,
                                        pc: 6,
                                        sp: 8,
                                        i: 10,
                                        de: 13,
                                        bc_: 15,
                                        de_: 17,
                                        hl_: 19,
                                        a_: 21,
                                        f_: 22,
                                        iy: 23,
                                        ix: 25
                                    });
                                    var n = v[12]
                                      , t = v[28];
                                    255 == n && (n = 1);
                                    a.r = 127 & v[11] | n << 7 & 128,
                                    a.border = n >> 1 & 7,
                                    a.halted = 118 == t,
                                    a.im = 3 & v[29],
                                    a.iff = !!v[27] | !!t << 1,
                                    v[29] >> 6 == 1 && (a.joy = !0);
                                    if (!a.pc)
                                        return [s(v, 30, 32), e];
                                    {
                                        var i;
                                        32 & n && (i = r())
                                    }
                                    return a.ram = bytes(49152),
                                    [(i || s)(a.ram, 0, 49152)]
                                }
                                , s(v, 0, 30)],
                                rom: [function n(t) {
                                    var i = v.length;
                                    if (0 < t) {
                                        for (var u = t; u--; )
                                            v.push(h());
                                        return [d, n]
                                    }
                                    for (; i & i - 1; )
                                        i = v.push(255);
                                    for (; i < 16384; )
                                        v = v.concat(v),
                                        i += i;
                                    l();
                                    a.rom = v,
                                    a.pc = a.im = a.iff = 0
                                }
                                , d],
                                scr: [function n(t) {
                                    l();
                                    var i, u, o, f;
                                    i = a.ram[5];
                                    for (o = 6912; o < 16380; o++)
                                        i[o] = 0;
                                    i[o++] = 243,
                                    i[o++] = 118,
                                    i[o++] = 24,
                                    i[o] = 252;
                                    a.pc = 32764;
                                    a.halted = 1,
                                    a.iff = a.border = a.model = 0;
                                    if (0 < t) {
                                        var c = v.length;
                                        if (c) {
                                            for (a.pFF = 2,
                                            f = 8192,
                                            o = 0; o < 768; o++)
                                                i[f++] = i[6144 + o];
                                            i[f++] = v[0],
                                            r = [s(i, f, 14335)]
                                        } else {
                                            v[0] = h();
                                            var r = [d, n]
                                        }
                                        return r
                                    }
                                    f = v[0];
                                    if (!(0 <= f))
                                        for (u = [0, 0, 0, 0, 0, 0, 0, 0],
                                        o = 6911,
                                        e(63, -1),
                                        e(22, -32),
                                        e(31, 1),
                                        e(22, 32),
                                        o = f = 0; o < 8; o++)
                                            u[o] > u[f] && (f = o);
                                    a.border = 7 & f;
                                    return [];
                                    function e(n, t) {
                                        for (; u[i[o] >> 3 & 7]++,
                                        o += t,
                                        --n; )
                                            ;
                                    }
                                }
                                , d, s(a.ram[5], 0, 6912)]
                            }[n];
                            if (!i)
                                throw "Unknown format";
                            function o(n, t) {
                                return (t = t || s)(n != +n ? n : a.ram[n], 0, 16384)
                            }
                            function s(n, t, i) {
                                return function() {
                                    for (; n[t] = h(),
                                    ++t < i; )
                                        ;
                                    return []
                                }
                            }
                            function l() {
                                a.model = a.pFF = a.halted = 0,
                                a.p7FFD = 48,
                                a.rom = null,
                                a.ay = !1
                            }
                            function d(n) {
                                if (n)
                                    return []
                            }
                            function t(n) {
                                if (0 < n)
                                    return [s(v = [], 0, 4), f];
                                var t = a.sp;
                                return a.pc = i(t) | i(t + 1) << 8,
                                a.sp = t + 2 & 65535,
                                [];
                                function i(n) {
                                    return [[], a.ram[5], a.ram[2], a.ram[0]][n >> 14][16383 & n]
                                }
                            }
                            function f() {
                                p({
                                    pc: 0
                                }),
                                a.model = 1,
                                a.p7FFD = t = v[2],
                                (t &= 7) && (v = a.ram[0],
                                a.ram[0] = a.ram[t],
                                a.ram[t] = v);
                                for (var n = [], t = 0; t < 8; t++)
                                    2 != t && 5 != t && t != (7 & a.p7FFD) && n.push(o(t));
                                return n
                            }
                            function e() {
                                var n, t, i, u, o = v[30] | v[31] << 8, f = 32 + o;
                                if (v.length < f)
                                    return [s(v, 32, f), e];
                                if (p({
                                    pc: 32
                                }),
                                t = 0,
                                (o < 24 ? 2 : 3) < (n = v[34]) && n < 14 && (a.p7FFD = v[35],
                                t = 9 == n ? 5 : 1),
                                a.model = t,
                                (a.tc2048 = 14 == (-2 & n)) && (a.pFF = v[36]),
                                1 & (n = v[37]) || (a.r = 128 & a.r | 128 * Math.random()),
                                4 & n)
                                    for (u = [],
                                    a.ay = {
                                        idx: v[38],
                                        reg: u
                                    },
                                    i = 0; i < 16; i++)
                                        u[i] = v[i + 39];
                                n: if (73 <= o && v[29] >> 6 == 2) {
                                    for (u = [],
                                    i = 0; i < 10; i += 2) {
                                        var c = v[63 + i]
                                          , r = v[64 + i];
                                        if (7 < c || 31 < r || !r || r - 1 & r)
                                            break n;
                                        r = r < 8 ? r >> 1 : 16 + r >> 3,
                                        u.push(c | r << 3)
                                    }
                                    a.joy = u
                                }
                                return [d, b]
                            }
                            function b(n) {
                                if (0 < n)
                                    return [s(v = [], 0, 3), c]
                            }
                            function c() {
                                var n, t, i = v[0] | v[1] << 8, u = v[2];
                                if (i | u)
                                    return (t = [[, 2, 0, , , 5], [0, 1, 2, 3, 4, 5, 6, 7]][0 < a.model | 0][u - 3]) != +t && (t = bytes(16384),
                                    u < 2 && (a.rom = t)),
                                    i < 65535 && (n = r()),
                                    [o(t, n), b]
                            }
                            function p(n) {
                                for (var t in n) {
                                    var i = n[t];
                                    a[t] = v[i],
                                    t.match(/.[a-z]/) && (a[t] |= v[i + 1] << 8)
                                }
                            }
                            function r() {
                                var o, f = 0;
                                return function(t, i, u) {
                                    return function() {
                                        n: for (; ; )
                                            switch (f) {
                                            case 0:
                                                do {
                                                    if (o = h(),
                                                    t[i] = o,
                                                    ++i == u)
                                                        break n
                                                } while (237 != o);f--;
                                            case -1:
                                                if (237 != (o = h())) {
                                                    if (t[i] = o,
                                                    ++i === u)
                                                        break n;
                                                    f = 0;
                                                    break
                                                }
                                                f--,
                                                i--;
                                            case -2:
                                                if (!(o = h())) {
                                                    f = t.length - i;
                                                    break
                                                }
                                                f--;
                                            case -3:
                                                var n = h();
                                                if (f = o,
                                                o = n,
                                                !f)
                                                    break;
                                            default:
                                                do {
                                                    if (t[i] = o,
                                                    --f,
                                                    ++i === u)
                                                        break n
                                                } while (f)
                                            }
                                        return []
                                    }
                                }
                            }
                            var k = [];
                            function h() {
                                var n = u.data
                                  , t = u.data.length
                                  , i = u.pos;
                                if (t <= i)
                                    throw k;
                                return u.pos = i + 1,
                                n.charCodeAt ? 255 & n.charCodeAt(i) : n[i]
                            }
                            return function() {
                                try {
                                    for (var n; n = i.pop(); ) {
                                        var t = n(u.data.length - u.pos || 0 - !!u.eof);
                                        if (!t)
                                            break;
                                        i = i.concat(t.reverse())
                                    }
                                } catch (n) {
                                    if (n !== k)
                                        throw n;
                                    if (u.eof)
                                        throw "Unexpected end of file"
                                }
                                if (n)
                                    return i.push(n)
                            }
                        }(f, n, o),
                        r = function() {
                            setTimeout(function() {
                                h.stop("snap", 0)
                            }, 200)
                        }
                        ;
                    else {
                        if ("tap" != o)
                            throw "Unknown file type";
                        "snap" == i && (p(i = "tape", e, 1),
                        o = (o = (o = (o = n.type) && o.match(/; *model *= *([^ ]+)/)) && y(o[1])) || k.getState().model,
                        k.command('\xef""', o),
                        p("snap"),
                        a())
                    }
                }
                if (c)
                    try {
                        var t = 1;
                        n.data && c(),
                        t = n.eof
                    } finally {
                        t && (p(i),
                        r && r()),
                        f && (k.setState(f),
                        u && u(f))
                    }
            }),
            p(i, e, 1)
        }
        ,
        h.getType = $,
        h.setModel = function(n) {
            return m = y(n),
            null != m && (m = {
                model: m
            },
            k.setState(m)),
            m
        }
        ,
        h
    }(),
    function(k, h, a, e) {
        var s, r = e.body, l = k.embed, b = $("#s"), p = {
            e: $("#l"),
            w: 256
        }, m = {
            e: $("#r"),
            w: 272
        }, d = setTimeout, w = location, y = "application/json";
        function x(n) {
            top.postMessage(n, "*")
        }
        var g, u, _, c, z, S = !(k.init = function() {
            var n, t;
            (onresize = N)(),
            onclick = C,
            onmousemove = onmouseout = onmouseup = ondragenter = ondragover = ondragleave = E,
            onmousedown = A,
            r.ontouchstart = r.ontouchmove = r.ontouchend = B,
            onkeydown = onkeyup = I,
            addEventListener("focus", O, 1),
            addEventListener("blur", O, 1),
            $("#c").oncopy = ondragstart = ondrag = ondragend = J,
            e.onpaste = ondrop = R,
            l || (s = localStorage,
            (n = function() {
                try {
                    var n, t, i, u, o, f = "qaop-state";
                    if (n = s[f])
                        for (s.removeItem(f),
                        (o = JSON.parse(n.substr(1 << 17))).ram = [],
                        t = 0; t < 8; t++)
                            for (o.ram[t] = u = bytes(16384),
                            i = 0; i < 16384; i++)
                                u[i] = n.charCodeAt(t << 14 | i)
                } catch (n) {
                    k.msg(n)
                }
                return onunload = function() {
                    var n = h.zx.getState()
                      , t = n.ram;
                    n.pause = h.stop("user"),
                    n.volume = T,
                    n.mute = U,
                    n.speed = h.speed,
                    delete n.ram,
                    s[f] = t.reduce(function(n, t) {
                        return n + (i = t,
                        String.fromCharCode.apply(String, i));
                        var i
                    }, "") + JSON.stringify(n)
                }
                ,
                o
            }()) || d(function() {
                k.msg("F9 - menu", 5e3)
            }, 300)),
            (t = Y(l) || {})["!"] && (n = {
                iff: 0,
                halted: 1,
                volume: n && n.volume
            });
            var i = 0;
            l || (n && (h.stop("user") ^ n.pause && k.cmd("pause"),
            L(n)),
            cn($(".tabv>:last-child")),
            i = t.snaps << 1 | !!t.u << 1 | t.menu,
            k.show(3, 3)),
            onhashchange = function() {
                Z(Y())
            }
            ,
            d(function() {
                n || (t.reset = 1),
                Z(t),
                h.stop("load", 0)
            }),
            d(function() {
                k.show(3, i)
            }),
            (t.snaps || t.menu) && G(/./);
            var u = "files"in $("input[type=file]")
              , o = h.m;
            hn(r, o ? "+audio" : "+noaudio"),
            $$(".c-pause,.c-reset,.c-128,.c-ay,.c-remember,.c-save" + (u ? ",.c-open" : "") + (o ? ",#vol,.c-mute" : "")).forEach(function(n) {
                n.disabled = 0
            }),
            b.ondblclick = function() {
                k.cmd("pause")
            }
            ,
            b.draggable = !0,
            l || ((onstorage = Q)(),
            nn()),
            r.removeChild($("#splash"));
            var f, c = a.applicationCache;
            c && (f = c,
            $("h1").onclick = function() {
                k.cmd("update")
            }
            ,
            f.onupdateready = function() {
                H = 1,
                f.swapCache(),
                hn(r, "+update")
            }
            ),
            onmessage = function(n) {
                var t, i, u, o = n.data;
                if (o === o + "" ? (t = o.match(/^([^ ]+) ([^ ]+)/)) ? (i = t[1],
                u = t[2]) : i = o : i = o.cmd,
                i)
                    switch (i) {
                    case "load":
                        (u || o) && k.load(u || o);
                        break;
                    case "model":
                        u && F(h.setModel(u));
                        break;
                    case "keydn":
                    case "keyup":
                        u && h.kbd(+u, "keydn" == i);
                        break;
                    default:
                        u && k.cmd(i, u)
                    }
                else
                    L(o)
            }
            ,
            x({
                volume: T
            })
        }
        ), U = !1, T = .5;
        function q(n, t) {
            $$(n).forEach(function(n) {
                hn(n, "active", t),
                n.checked = t
            })
        }
        function F(n) {
            var t, i, u, o, f = X, c = {
                pause: S,
                mute: U,
                volume: T
            };
            q(".c-mute", U),
            hn(r, "mute", U),
            $("#vol>*>*").style.width = 100 * T + "%",
            q(".c-pause", S),
            hn(r, "pause", S),
            (t = n.model) != i && (q(".c-128", t = !!t),
            f[128] = (c[128] = t) || i),
            u = n.ay,
            o = t,
            (t = null == u ? o : u) != i && (q(".c-ay", t = !!t),
            f.ay = (c.ay = t) || i),
            (t = n.tc2048) != i && (t = !!t,
            f.tc2048 = (c.tc2048 = t) || i),
            l && x(c)
        }
        function L(n) {
            var t, i, u;
            h.zx.setState(n),
            (t = n.volume) != u && (T = 0 < t ? 1 < t ? 1 : t : 0,
            i = 1),
            (t = n.mute) != u && (U = !!t,
            i = 1),
            i && h.zx.volume(U ? 0 : T),
            (t = n.speed) != u && (h.speed = 1 < t ? 0 | t : 1),
            F(n)
        }
        function N() {
            var n, t, i, u, o, f = 3 & g, c = h.zx.dim, r = innerWidth, e = innerHeight, a = r, v = e, s = 0, l = 512 - r;
            switch (0 < l && (r += l >> 3),
            f && (r = 15 * r >> 4,
            s = e >> 5,
            i = v - (e = 15 * e >> 4) >> 2),
            l = c[0] * e,
            (n = c[1] * r) < l ? e -= e - n / c[0] | 0 : r -= r - l / c[1] | 0,
            t = a - r >> 1,
            u = p.w,
            o = m.w,
            n = a - 48,
            f) {
            case 1:
                n < u && (u = n),
                t < (l = u + i) && (t = l);
                break;
            case 2:
                n < o && (o = n),
                (l = a - r - o - i) < t && (t = l);
                break;
            case 3:
                (n >>= 1) < u && (u = n),
                n < o && (o = n)
            }
            var d = $("#c").style;
            d.width = r + "px",
            d.height = e + "px",
            d.left = t + "px",
            d.top = s + "px",
            (d = p.e.style).left = (1 & f ? 0 : -p.w) + "px",
            d.width = u + "px",
            (d = m.e.style).right = (2 & f ? 0 : -m.w) + "px",
            d.width = o + "px",
            h.canvas(b, e),
            l = v - e,
            M = !f && 127 < l ? e : 0,
            (d = $("#k").style).height = l + "px",
            d.display = M ? "block" : "none",
            M && D(a, l, e)
        }
        function A(n) {
            if (u = e.activeElement,
            $("#vol").contains(n.target))
                return fn(n)
        }
        function C(n) {
            var t = n.target
              , i = t.className;
            if (i && i.match && (i = i.match(/\bc-(\S+)/)))
                t.disabled || k.cmd(i[1]);
            else {
                if (mn(t, "#s,button"))
                    return "s" == t.id && (t = $("#c")),
                    void t.focus();
                if ($("#vol").contains(t))
                    return fn(n);
                t = e.activeElement,
                bn(n, u != t && "click+focus"),
                u = t
            }
        }
        function E(i) {
            var n = i.type
              , t = [i.pageX, i.pageY];
            if ("mouseout" != n) {
                if (_)
                    return _(i, n, t);
                var u, o, f = c;
                return (c = t,
                "m" != n[0] && (u = R(i)),
                !f || (o = t[0] - f[0]) || t[1] - f[1]) ? (hn(r, "+move"),
                clearTimeout(z),
                z = d(function() {
                    if (hn(r, "-move"),
                    f) {
                        var n, t = i.target;
                        if (mn(t, ".tabv>button"))
                            return t.focus();
                        bn(i, "hover") || (n = f[1]) < 32 || innerHeight - n < 33 || M && M <= n || (n = f[0],
                        o <= 0 && n < 32 && k.show(1, 1),
                        0 <= o && innerWidth - n < 33 && k.show(2, 2))
                    }
                }, 200),
                u) : u
            }
            null === i.relatedTarget && clearTimeout(z)
        }
        function I(n) {
            var t, i = n.target, u = n.keyCode, o = n.type, f = "keydown" == o, c = n.ctrlKey, r = h.stop("user");
            if (45 == u && (t = $("[rel=search]")) && t.click(),
            119 == u) {
                var e, a = $("#kh");
                return a.children[0] || ((e = new Image).src = "qaop/keyboard",
                a.appendChild(e)),
                a.style.display = f ? "block" : "none",
                void h.stop("kh", f)
            }
            n: if (!g && (u < 112 || 123 < u) && 19 != u && 46 != u) {
                if ((27 == u || 32 == u) && f && r)
                    k.cmd("pause");
                else if (32 < u && u < 35)
                    fn(n);
                else {
                    if (r)
                        break n;
                    "keypress" != o && h.kbd(~u, f, n.shiftKey + 2 * (c | n.altKey | n.metaKey))
                }
                return pn(n)
            }
            if ((t = {
                19: "pause",
                112: "help",
                113: "remember",
                114: "restore",
                116: "update",
                121: "mute"
            }[u]) && pn(n),
            f)
                if (t)
                    k.cmd(t);
                else {
                    if (c)
                        return t = {
                            46: "reset",
                            79: "open",
                            83: "save"
                        }[u],
                        46 == u && h.kbd(),
                        k.cmd(t),
                        pn(n);
                    if (27 != u && 120 != u || k.show(3, 27 == u ? 0 : 3 ^ g && 3),
                    "vol" != i.id || u - 38 & -3 || fn(n),
                    "BUTTON" == i.nodeName)
                        if (37 == u || 39 == u) {
                            for (t = 37 == u ? "previous" : "next"; (i = i[t + "ElementSibling"]) && i.hidden; )
                                ;
                            i && "BUTTON" == i.nodeName && i.focus()
                        } else
                            40 == u && (t = i.dataset.down) && $("#" + t).focus();
                    bn(n)
                }
        }
        function O(n) {
            var t = n.target;
            if (t != a) {
                var i = "focus" == n.type;
                if ("c" == t.id)
                    return i ? void k.show(3, 0) : (h.kbd(),
                    void d(function() {
                        e.activeElement == t || g || k.show(3, 3)
                    }));
                i && (mn(t, "#l *") && k.show(1, 1),
                mn(t, "#r *") && k.show(2, 2),
                mn(t, ".tabv>button") && cn(t))
            }
        }
        function R(n) {
            var t, i = n.type, u = n.dataTransfer || n.clipboardData;
            if (u.dropEffect = "copy",
            pn(n),
            "drop" != i && "paste" != i)
                return !1;
            (t = u.files) && (t = t[0]) || (t = u.getData("URL")) ? k.load(t) : (t = u.getData("Text")) && h.kbd(t)
        }
        function J(n) {
            var t, i, u, o, f = n.type, c = n.dataTransfer || n.clipboardData, r = n.target;
            return r != b && "c" != r.id ? bn(n) : ("dragstart" != f && "copy" != f || (on(c),
            t = $e("canvas"),
            i = $e("img"),
            u = h.zx.dim,
            t.height = o = u[1] >> 1,
            t.width = u = u[0] >> 1,
            t.getContext("2d").drawImage(b, 0, 0, b.width, b.height, 0, 0, u, o),
            i.src = t.toDataURL(),
            c.setDragImage(i, u / 2, o / 2)),
            !0)
        }
        k.cmd = function(n, t) {
            var i, u, o, f = null == t;
            switch (n) {
            case "pause":
                f && (t = !h.stop("user")),
                S = !!t,
                h.stop("user", t),
                F({}),
                P(),
                t && h.kbd();
                break;
            case "reset":
                h.reset(),
                G();
                break;
            case "open":
                var c = $("#open");
                c.onchange = function() {
                    var n = c.files[0];
                    n && k.load(n),
                    c.value = ""
                }
                ,
                c.click();
                break;
            case "save":
                try {
                    /\.z80$/i.test(t = t || "snapshot") || (t += ".z80"),
                    V(t, un())
                } catch (n) {
                    k.msg(n)
                }
                break;
            case "128":
                f && (t = !h.zx.getState().model),
                L({
                    model: +t
                });
                break;
            case "ay":
                f && (t = !h.zx.getState().ay),
                L({
                    ay: +t
                });
                break;
            case "mute":
                f && (t = !U),
                L({
                    mute: +t
                });
                break;
            case "remember":
                !function() {
                    var n, t, i, u, o, f = new Date;
                    for (n = [f.getMonth() + 1, f.getDate(), f.getHours(), f.getMinutes()].reduce(function(n, t, i) {
                        return n + "-- :"[i] + ("0" + t).substr(-2)
                    }, f.getFullYear()),
                    i = an.snaps,
                    o = 0,
                    t = n; !((u = i.o.indexOf(t)) < 0 || u == i.sel); t = n + " (" + ++o + ")")
                        ;
                    u = i.sel;
                    try {
                        0 <= u && s.removeItem("zx/" + i.o[u]),
                        s["zx/" + t] = un()
                    } catch (n) {
                        return k.msg(n)
                    }
                    u < 0 ? hn(i.e[u = ln(i, t, t)], "+sel") : i.e[u].firstChild.textContent = i.o[u] = t;
                    i.act("sel", i.sel = u),
                    nn()
                }();
                break;
            case "restore":
                e().act("click", o.sel);
                break;
            case "rmsna":
                e().act("del", o.sel);
                break;
            case "svsna":
                s && (i = e().o[o.sel],
                (u = s["zx/" + i]).match(/^data:/) && V(i + ".z80", u));
                break;
            case "update":
                var r = a.applicationCache;
                if (r && !H)
                    switch (r.status) {
                    case 1:
                        r.update();
                    case 2:
                    case 3:
                        return
                    }
                G(/./),
                w.reload();
                break;
            case "help":
                $("[rel=help]").click()
            }
            function e() {
                return o = an.snaps
            }
        }
        ,
        k.load = function(n, t) {
            t || G(),
            h.load("snap", n, F)
        }
        ,
        k.show = function(n, t) {
            l && (t &= -4);
            var i = g & ~n ^ t;
            return i == g || (3 & (g ^ i) && hn(r, "anim", null != g),
            hn(r, "full", !(3 & i)),
            g = i,
            N(),
            $("#c")[3 & i ? "blur" : "focus"]()),
            i
        }
        ;
        var M, o, D, W = [];
        function B(n) {
            W = [].map.call(n.touches, function(n) {
                return [n.pageX, n.pageY]
            }),
            o();
            var t = n.type[5];
            "m" == t && pn(n),
            "e" == t && h.h && h.h()
        }
        !function() {
            var u;
            $("#k").onmousedown = function(n) {
                W[0] || (u = [n.pageX, n.pageY],
                o(),
                _ = function(n, t, i) {
                    "m" == t[5] ? u = i : _ = u = null,
                    o()
                }
                ,
                h.stop("user") && k.cmd("pause"))
            }
            ;
            var v, s, l, d, b, p, f = [];
            o = function() {
                var n = W;
                for (var t in u && (n = n.slice()).push(u),
                M && n.map(function(n) {
                    var t, i, u, o = n[1] - v;
                    0 <= o && (i = o / l | 0) < 4 && o - i * l < s && 0 <= (t = n[0] - d) && (u = t / p | 0) < 10 && t - u * p < b && (f[u = u < 5 ? 3 - i | u << 3 : 4 + i | 9 - u << 3] |= 2)
                }),
                f) {
                    var i = f[t];
                    i && (i < 3 && h.kbd(+t, 1 < i),
                    f[t] = i >> 1)
                }
            }
            ,
            D = function(n, t, i) {
                var u = n >> 7;
                d = n - 10 * (p = (n - (v = u)) / 10 | 0) + u >> 1,
                (b = p - u) < (s = (l = t - u >> 2) - u) && (l = (s = b) + u);
                var o = $("#k")
                  , f = 0
                  , c = v
                  , r = d;
                do {
                    var e = o.children[f];
                    e || ((e = o.appendChild($e("div"))).textContent = "1234567890QWERTYUIOPASDFGHJKL\u21b5\u21e7ZXCVBNM\u25c6 "[f]);
                    var a = e.style;
                    a.top = c + "px",
                    a.left = r + "px",
                    a.width = b + "px",
                    a.height = s + "px",
                    r += p,
                    ++f % 10 || (c += l,
                    r = d)
                } while (f < 40);v += i
            }
        }();
        var H, f, j, X = {};
        function Y(n) {
            var t = w.hash.substr(1)
              , i = $("#bb")
              , u = decodeURIComponent;
            if (n || t != i.value) {
                i.value = t;
                var o = {}
                  , f = t.match(/^!([^#]+)#?(.*)/);
                return f && (o["!"] = u(f[1]),
                t = f[2]),
                t.split(/#/).map(function(n) {
                    n && ((f = n.match(/^(~?)([^=./]+)(?:=([^#]*))?$/)) ? (v = !f[1] && (null == f[3] || u(f[3])),
                    o[f[2]] = v) : o.l || (o.l = n))
                }),
                o
            }
        }
        function Z(n) {
            var t, i, u, o, f, c, r;
            n && ((f = X).u != n.u && (f.u = u = n.u,
            (t = $("[data-for=userg]")).hidden = !u,
            t.style.display = u ? "" : "none",
            function(n, t) {
                var c = vn(n);
                c.rq && c.rq.abort();
                if (null == t)
                    return;
                c.act = en;
                var r = $e("a");
                r.href = t,
                c.rq = request({
                    url: r.href
                }, {
                    text: 1,
                    acc: y + ",text/plain,text/html",
                    color: "#EC0"
                }, function(n) {
                    if (n.eof) {
                        delete c.rq,
                        c.ul.innerHTML = "";
                        var t = n.type
                          , i = n.data;
                        if (i && t) {
                            t = t.replace(/ *;.*/, "");
                            var u, o = e.head, f = $e("base");
                            f.href = n.url,
                            o.insertBefore(f, o.firstChild);
                            try {
                                !function() {
                                    if (t == y) {
                                        if (!(u = JSON.parse(i)).forEach)
                                            throw "Not a table"
                                    } else
                                        u = (u = "text/html" == t ? ((u = $e("div")).innerHTML = i,
                                        [].map.call(u.querySelectorAll("a:not([rel=up])"), function(n) {
                                            return {
                                                url: n.href,
                                                name: n.textContent
                                            }
                                        })) : i.split(/\n+/).map(function(n) {
                                            var t = n.match(/^(\S+)\s*(.*)/);
                                            if (t)
                                                return {
                                                    url: t[1],
                                                    name: t[2]
                                                }
                                        })).filter(function(n) {
                                            if (n && n.url)
                                                return n.name || (n.name = n.url.replace(/.*\//, "")),
                                                n
                                        })
                                }(),
                                u.forEach(function(n) {
                                    var t = n.name
                                      , i = n.url;
                                    t && i && ln(c, t + "", {
                                        url: (r.href = i,
                                        r.href)
                                    })
                                })
                            } catch (n) {
                                k.msg(n)
                            }
                            o.removeChild(f)
                        }
                    }
                }),
                c.ul.innerHTML = "\u2652"
            }("user", u || null),
            u && t.focus()),
            (u = n["!"]) && (o = u.match(/^([a-z0-9]+)(:[a-z0-9]+)?$/)) ? (f.l = null,
            k.load("/qaop/bin/" + u, 1),
            rn.hasOwnProperty(u) ? K() : (rn[o[1]] = null,
            request({
                url: "/qaop/inf/" + o[1]
            }, {
                text: 1,
                acc: y,
                nopb: 1
            }, function(n) {
                var t, i, u = n.data;
                !u || (i = (t = JSON.parse(u)).id) && (rn[i] = t,
                K())
            }))) : f.l != n.l && (f.l = i = n.l),
            c = {},
            (u = n[128]) != r && (c.model = +!!u),
            (u = n.tc2048) != r && (c.tc2048 = +!!u),
            (u = n.ay) != r && (c.ay = +!!u),
            (u = n.speed) != r && (c.speed = u),
            L(c),
            n.reset && h.reset(),
            i && k.load(i))
        }
        function G(n) {
            var t = w.href.replace(/#.*/, "");
            (n || /^#!/).test(w.hash) && history.replaceState(null, null, t),
            onhashchange()
        }
        function K() {
            var n = w.hash.match(/^#!([a-z0-9]+)/)
              , t = f
              , i = j
              , u = $("link[rel=manifest]");
            n && (t = t || (f = e.title),
            !i && u && (i = j = u.href),
            (n = rn[n[1]]) && (t = n.name + " \u2022 ZX Spectrum online",
            i = "qaop/wam/" + n.id)),
            t && (e.title = t),
            i && u && (u.href = i)
        }
        function P() {
            var f = $("link[rel~=icon]")
              , c = new Image;
            function n() {
                var n, t, i, u = $e("canvas"), o = u.getContext("2d");
                u.width = n = c.width,
                u.height = t = c.height,
                o.drawImage(c, 0, 0),
                h.stop("user") && (o.scale(n / 16, t / 16),
                o.fillStyle = "#FFF",
                o.fillRect(9, 9, 7, 7),
                o.fillStyle = "#33C",
                o.fillRect(10, 10, 2, 5),
                o.fillRect(13, 10, 2, 5)),
                (f = (i = f).cloneNode(1)).type = "image/png",
                f.href = u.toDataURL(),
                kn(i).replaceChild(f, i)
            }
            c.src = f.href,
            c.onload = function() {
                (P = n)()
            }
        }
        function Q() {
            for (var n, i = vn("snaps"), t = [], u = i.o.slice(), o = 0; o < s.length; )
                /^zx\/./.test(n = s.key(o++)) && t.push(n.substr(3));
            t.sort(),
            t = t.filter(function(n) {
                var t = u.indexOf(n);
                if (t < 0)
                    return 1;
                delete u[t]
            }),
            u.forEach(function(n, t) {
                dn(i, t)
            }),
            t.forEach(function(n) {
                ln(i, n, n)
            }),
            i.act = tn
        }
        function V(n, t) {
            var i = $("#save");
            i.href = t,
            i.textContent = i.download = n,
            i.click()
        }
        function nn() {
            $(".c-restore").disabled = !an.snaps.o.length
        }
        function tn(n, t, i) {
            var u = this
              , o = u.o.length;
            switch (n) {
            case "click":
                i || $("#c").focus();
            case "drag":
                var f = u.o[t] || u.o[o - 1]
                  , c = f && s["zx/" + f];
                if (!f || !c)
                    return;
                if ("drag" == n)
                    return on(i, f, c);
                k.load(c);
                break;
            case "sel":
                $(".c-svsna").disabled = $(".c-rmsna").disabled = t < 0,
                0 <= t && wn(u.e[t]);
                break;
            case "del":
                0 <= t && (s.removeItem("zx/" + u.o[t]),
                dn(u, t),
                nn())
            }
        }
        function un(n) {
            return "data:application/x.zx.z80;base64," + btoa(t(n || h.zx.getState()))
        }
        function on(n, t, i, u, o) {
            if (i = i || un(),
            n.setData("URL", i),
            !u) {
                if (!(u = i.match(/^data:([^,;]+)/)))
                    return;
                u = u[1]
            }
            (o = o || h.getType(u)) && (t = (t || "snapshot") + "." + o,
            n.setData("DownloadURL", u + ":" + t.replace(/:/g, "") + ":" + i))
        }
        function fn(n) {
            var o, t, i = T, f = n.pageX;
            switch (n.type) {
            case "keydown":
                (t = {
                    33: 1,
                    34: -1,
                    37: -1,
                    38: 1,
                    39: 1,
                    40: -1
                }[n.keyCode]) && (u(i + .1 * t),
                o = 1);
                break;
            case "mousedown":
                if (t = $("#vol>*>*>*").getBoundingClientRect(),
                (f -= t.left) < 0 || f >= t.width)
                    return;
                f -= t.width / 2,
                _ = function(n, t, i) {
                    var u;
                    c(i[0] - f),
                    o = 1,
                    "mouseup" == t && (o && (u = onclick,
                    onclick = null,
                    d(function() {
                        onclick = u
                    })),
                    _ = null)
                }
                ;
                break;
            case "click":
                c(f)
            }
            return o;
            function c(n) {
                var t = $("#vol>*").getBoundingClientRect();
                u((n - t.left) / t.width)
            }
            function u(n) {
                L({
                    volume: n < 0 ? 0 : 1 < n ? 1 : n
                })
            }
        }
        function cn(u) {
            [].forEach.call(kn(u).children, function(n) {
                var t = n.getAttribute("data-for")
                  , i = n == u;
                hn(n, "active", i),
                n.tabIndex = i - 1,
                t && ($("#" + t).style.visibility = i ? "visible" : "hidden")
            })
        }
        onappinstalled = function() {
            k.msg("Installed")
        }
        ;
        var rn = {};
        function en(n, t) {
            var i;
            "click" == n && ($("#bb").value = "",
            (i = this.o[t]).id ? (w.hash = "#!" + i.id,
            onhashchange()) : k.load(i.url),
            $("#c").focus())
        }
        var an = {
            snaps: {
                ul: $("#snaps")
            },
            user: {
                ul: $("#userg")
            }
        };
        function vn(n) {
            var t = an[n];
            return t.e = [],
            t.o = [],
            t.sel = -1,
            t.ul.innerHTML = "",
            t
        }
        function sn(n, i) {
            0 <= i && wn(n.e[i]),
            n.e.forEach(function(n, t) {
                hn(n, "sel", t == i)
            }),
            n.act("sel", n.sel = i)
        }
        function ln(n, t, i) {
            var u = $e("li")
              , o = u.appendChild($e("a"));
            return o.textContent = t,
            n.ul.appendChild(u),
            n.e.push(u),
            o.draggable = !0,
            n.o.push(i) - 1
        }
        function dn(n, t) {
            n.ul.removeChild(n.e[t]),
            n.e.splice(t, 1),
            n.o.splice(t, 1);
            var i = n.sel;
            sn(n, i -= t < i || i == t && t == n.e.length)
        }
        function bn(n, t) {
            if (i = function(n) {
                var t, i, u, o;
                for (o in mn(n, ".ls>li>a") ? n = kn(t = kn(i = n)) : mn(n, ".ls>li") && (n = kn(n)),
                an)
                    if ((u = an[o]).ul == n)
                        return {
                            l: u,
                            i: u.e.indexOf(t),
                            e: t,
                            a: i
                        }
            }(n.target)) {
                var i, u = i.l, o = i.i, f = u.sel;
                switch (t || n.type) {
                case "click":
                    f = o;
                case "click+focus":
                    0 <= o && !(1 < n.which) && u.act("click", o, n.ctrlKey);
                    break;
                case "hover":
                    0 <= o && (f = o);
                    break;
                case "keydown":
                    switch (n.keyCode) {
                    case 38:
                        0 < f && f--;
                        break;
                    case 40:
                        f + 1 < u.e.length && f++;
                        break;
                    case 13:
                        0 <= f && u.act("click", f, n.ctrlKey);
                        break;
                    case 46:
                        return u.act("del", f),
                        1;
                    case 27:
                        f = -1;
                        break;
                    default:
                        return void u.act("key", -1, n)
                    }
                    pn(n);
                    break;
                case "dragstart":
                    if ((f = o) < 0)
                        break;
                    u.act("drag", o, n.dataTransfer)
                }
                return u.sel != f && sn(u, f),
                1
            }
        }
        function pn(n) {
            n.preventDefault()
        }
        function kn(n) {
            return n.parentNode
        }
        addEventListener("transitionend", function() {
            hn(r, "-anim")
        })
    }(ui, emu, window, document),
    setTimeout(function(n, t) {
        n = n("L3RvcmluYWsu"),
        (!t || t.href.indexOf(n) < 0) && emu.stop(n, 1)
    }, 1e6, atob, $("a[rel=author]")),
    ld(function(n) {
        var s = this;
        s.cpu = new n(s),
        s.devs = [],
        s.keyboard = [255, 255, 255, 255, 255, 255, 255, 255];
        var a, l, v, c, d, b, p, k, h, m, w, $, y = 24;
        function t(n) {
            var t, i, u, o, f, c, r = n.pFE, e = 16384;
            if (r != o && (_ = r),
            r = n.border,
            t = _,
            r != o && (_ = 248 & t | r),
            f = 7 & (t ^ _),
            nn = 7 & _,
            "rom"in n && (m = n.rom),
            r = n.model,
            (t = n.p7FFD) != +t && (t = z),
            r != o && (y = -26 & y | 0 < (r = 5 == r ? r : +!!r) | (r < 5 ? 24 : 0),
            l = (a = [[69888, 14335, 224, 32], [70908, 14361, 228, 32], , , , [71680, 17989, 224, 36]][r])[2],
            v = 191 * l + 126,
            h = s.rom128[1],
            1 & y || (h = s.rom48k,
            p != k[0] && x(k[0] = bytes(e), 0, p, 0, e),
            t = 48)),
            f |= 8 & (t ^ z),
            U(t),
            r = n.tc2048,
            t = n.pFF,
            r == o && !n.model || (y = -5 & y | r << 2,
            r || (t |= 0)),
            t == +t && (S = t),
            (r = n.cont) != o && (y &= -9,
            w &= -16,
            r && (y |= 8,
            w |= 2 | (1 & z) << 3)),
            (r = n.fbus) != o && (y = -17 & y | !!r << 4),
            (r = n.joy) != o && (r ? s.joy &= 255 : s.joy = o),
            r = n.ram)
                if (f = 1,
                8 < (u = r.length))
                    x(d, 0, r, 0, e),
                    x(b, 0, r, e, e),
                    x(p, 0, r, 32768, e);
                else
                    for (; u; )
                        (i = r[--u]) && k[u] != i && x(k[u], 0, i, 0, e);
            if ((r = n.ay) == o && (r = n.model),
            "" === r && (r = !!pn,
            pn = o),
            r) {
                if (pn || (pn = {
                    idx: 0,
                    reg: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    volt: [0],
                    avol: 0,
                    bvol: 0,
                    cvol: 0,
                    mix: 0,
                    gen: 0,
                    aper: 0,
                    bper: 0,
                    cper: 0,
                    nper: 0,
                    eper: 0,
                    dis: 0,
                    ech: 0,
                    ekeep: 0,
                    ealt: 0,
                    eattack: 0,
                    estep: 0,
                    ecnt: 0,
                    noise: 1
                },
                hn()),
                r.reg)
                    for (t = 0; t < 15; t++)
                        r.reg[t] != o && mn(t, 0 | r.reg[t]);
                (t = r.idx) != o && (pn.idx = 15 & t)
            } else
                r != o && (pn = o);
            (r = n.time) == +r && (s.time = r - a[1]),
            f && B && (c = s.time,
            g(2),
            s.time = c),
            s.cpu.setState(n)
        }
        function x(n, t, i, u, o) {
            for (; n[t++] = 0 | i[u++],
            --o; )
                ;
        }
        function g(n) {
            H || f(),
            J = (1 & S) << 13,
            R = 0,
            D = L * G,
            M = L * (F + 32 + F) + F - 1;
            var t = -l * L - 4 * F + 4;
            Q = -F,
            V = -L,
            P = t,
            2 & n && (W(i = s.time),
            un(i));
            var i, u, o = a[0] - a[1];
            1 & n ? (4 & y && 64 & S || (s.int = 255,
            s.time_limit = a[3] - a[1],
            s.cpu.execute()),
            s.int = -1,
            s.time_limit = o,
            s.cpu.execute()) : s.time = o,
            2 & n && (W(i = s.time),
            nn != tn && (u = P,
            un(i),
            u == t && (tn = nn)),
            O && on(O)),
            s.time -= a[0]
        }
        s.init = function() {
            k = [];
            for (var n = 0; n < 8; n++)
                k[n] = bytes(16384);
            for (c = rom = h,
            d = k[5],
            b = k[2],
            p = k[0],
            w = 226,
            $ = d,
            t({
                model: 0
            }),
            s.time = -a[1],
            n = 6144; n < 6912; )
                d[n++] = 7;
            for (E = [],
            n = N * A / 8; E[--n] = 0,
            n; )
                ;
            B && i()
        }
        ,
        s.reset = function() {
            s.cpu.reset(),
            nn = 0,
            U(1 & y ? 0 : 48);
            for (var n, t = s.time, i = s.devs, u = i.length, o = 0; o < u; o++)
                (n = i[o]).reset && n.reset(t)
        }
        ,
        s.canvas = function(n, t) {
            H = null,
            B = n.getContext("2d"),
            X = t || 1,
            E && i()
        }
        ,
        s.getState = function(n) {
            var t, i, u = s.cpu.getState(), o = 16384;
            if (u.pFE = _,
            u.border = nn,
            u.p7FFD = z,
            u.model = 1 & y && (8 & y ? 1 : 5),
            u.tc2048 = !!(4 & y),
            u.cont = !!(8 & y),
            u.fbus = !!(16 & y),
            u.joy = null != s.joy,
            u.pFF = S,
            u.ay = pn && {
                idx: pn.idx,
                reg: pn.reg.slice()
            },
            u.time = s.time + a[1],
            u.frt = a[0],
            1 == n)
                x(t = bytes(3 * o), 0, d, 0, o),
                x(t, o, b, 0, o),
                x(t, 32768, p, 0, o);
            else
                for (t = [],
                i = 0; i < 8; i++)
                    t[i] = k[i],
                    1 < n && x(t[i] = bytes(o), 0, k[i], 0, o);
            return u.ram = t,
            m && (u.rom = m),
            u
        }
        ,
        s.setState = t,
        s.frame = function(n) {
            if (!--I) {
                I = 16;
                for (var t = 128; t < 256; t++) {
                    var i = (i = C[t]) << 4 & 61440 | i >> 4 & 3840;
                    C[t] = i
                }
            }
            for (var u = s.time, o = a[0], t = 0, f = s.devs, c = f.length; t < c; t++) {
                var r = f[t];
                r.frame && r.frame(o, u, n)
            }
            fn = 50 * o,
            g(n),
            K && (bn(o + u),
            vn = u)
        }
        ,
        s.time = s.time_limit = 0,
        s.m1 = function(n, t) {
            var i, u = n < 32768 ? n < 16384 ? (i = c,
            1) : (i = d,
            2) : n < 49152 ? (i = b,
            4) : (i = p,
            8), o = s.time - r;
            return 0 < o && T(o),
            w & u && e(0),
            r = w & 1 << (t >> 14) ? s.time + 4 : 99999,
            i[16383 & n]
        }
        ,
        s.get = function(n) {
            var t, i = n < 32768 ? n < 16384 ? (t = c,
            1) : (t = d,
            2) : n < 49152 ? (t = b,
            4) : (t = p,
            8), u = s.time - r;
            return 0 < u && T(u),
            r = 99999,
            w & i && (e(0),
            r = s.time + 3),
            t[16383 & n]
        }
        ,
        s.put = function(n, t) {
            var i, u = w;
            n < 32768 ? n < 16384 ? (i = c,
            u &= 17) : (i = d,
            u &= 34) : n < 49152 ? (i = b,
            u &= 68) : (i = p,
            u &= 136);
            var o = s.time - r;
            0 < o && T(o),
            r = 99999,
            u && (15 & u && (e(0),
            r = s.time + 3),
            i[n &= 16383] !== t && (i === $ && W(s.time),
            i[n] = t))
        }
        ,
        s.get16 = function(n) {
            var t, i, u = 16383 & n;
            if (16383 == u) {
                var o = s.get(n);
                return s.time += 3,
                o |= s.get(n + 1 & 65535) << 8,
                s.time -= 3,
                o
            }
            i = n < 32768 ? n < 16384 ? (t = c,
            1) : (t = d,
            2) : n < 49152 ? (t = b,
            4) : (t = p,
            8);
            var f = s.time - r;
            return 0 < f && T(f),
            r = 99999,
            w & i && (e(0),
            e(3),
            r = s.time + 6),
            t[u] | t[1 + u] << 8
        }
        ;
        var r, _ = 0, z = 48, S = 0;
        function U(n) {
            p = k[7 & (z = n)],
            w = 8 & y ? 226 | n << 3 & 8 : 224,
            $ = k[5 | n >> 2 & 2],
            c = 16 & n ? m || h : s.rom128[0]
        }
        function e(n) {
            (n += s.time) < 0 || v <= n || (n %= l) < 126 && 0 < (n = 6 - (7 & n)) && (s.time += n)
        }
        function T(n) {
            var t, i, u = r;
            if (!(u + n <= 0 || (t = v - u) < 0)) {
                if (126 < (t %= l)) {
                    if ((n -= t - 126) <= 0)
                        return;
                    u = 6,
                    i = 15
                } else {
                    if (i = t >> 3,
                    7 == (t &= 7) && (t--,
                    !--n))
                        return;
                    u = t
                }
                i < (n = n - 1 >> 1) && (n = i),
                s.time += u + 6 * n
            }
        }
        function q(n) {
            var t = s.time - r
              , i = 1 & n;
            0 < t && T(t),
            r = 8 & y ? n >> 14 ^ 1 ? (i || e(1),
            99999) : (r = s.time,
            T(1 + i << 1),
            s.time + 4) : 99999
        }
        s.inp = function(n) {
            q(n);
            var t, i, u, o, f, c, r = 65535, e = s.time, a = s.devs, v = a.length;
            for (31 == (255 & n) && null != (t = s.joy) && (r = t),
            u = 0; u < v; u++)
                (n & (o = a[u]).imask) == o.iport && (r &= o.inp(n, e));
            if (r < 256)
                return r;
            if (t = 255,
            1 & n)
                pn && 49152 == (49154 & n) ? t = pn.reg[pn.idx] : !(255 & ~n) && 4 & y ? t = S : 0 <= e && 16 & y && (c = e / l,
                e %= l,
                c < 192 && e < 124 && !(4 & e) && (f = e >> 1 & 1 | e >> 2,
                t = $[f += 1 & e ? 6144 | c << 2 & 992 : 6144 & c | c << 2 & 224 | c << 8 & 1792]));
            else
                for (t = _ << 2 & 64 | 160 & t | 31,
                i = n >> 8 ^ 255,
                u = 0; i; u++)
                    1 & i && (t &= s.keyboard[u]),
                    i >>= 1;
            return r &= t | r >> 8 ^ 255,
            32770 & n || 32 & z || (8 & (z ^ r) && W(e),
            U(r)),
            r
        }
        ,
        s.out = function(n, t) {
            q(n);
            for (var i, u = s.time, o = s.devs, f = o.length, c = 0; c < f; c++) {
                var r = o[c];
                (n & r.omask) == r.oport && r.out(n, t, u)
            }
            if (1 & n || ((i = 7 & t) != nn && (un(u),
            nn = i),
            24 & (_ ^ t) && bn(u + (t >> 1 & 8 ^ 8)),
            _ = t),
            !(2 & n))
                if (n < 32768) {
                    if (32 & z)
                        return;
                    8 & (z ^ t) && W(u),
                    U(t)
                } else
                    pn && (n < 49152 ? (bn(u),
                    mn(pn.idx, t),
                    dn(0, pn.level - (pn.level = yn()))) : pn.idx = 15 & t);
            !(255 & ~n) && 4 & y && (W(u),
            J = 8191 & J | (1 & t) << 13,
            S = t)
        }
        ,
        s.halt = function(n) {
            return n
        }
        ;
        var F = 4
          , L = 28
          , N = 8 * (F + 32 + F)
          , A = L + 192 + L;
        s.dim = [N, A];
        var C, E, I = 16, O = 0, R = 0, J = 0, M = 0, D = 0;
        function W(n) {
            if (!(n < R)) {
                var t = J
                  , i = R
                  , u = M
                  , o = D
                  , f = 1 << (t >> 5 & 7 | t >> 8 & 24)
                  , c = 3 & S
                  , r = c < 2 ? (-256 & t) - (t >> 3 & 768) - 6144 : 3 ^ c && -8192;
                do {
                    if (c = C[$[t - r]] | $[t++],
                    E[++u] !== c && (E[u] = c,
                    Z(u, o, c),
                    O |= f),
                    c = C[$[t - r]] | $[t++],
                    E[++u] !== c && (E[u] = c,
                    Z(u, o, c),
                    O |= f),
                    i += 8,
                    !(31 & t)) {
                        if (i += l - 128,
                        u += 2 * F,
                        o += G,
                        t += 224,
                        2 & S) {
                            if (1792 & t)
                                continue;
                            if (f <<= 1,
                            224 & (t -= 2016))
                                continue
                        } else {
                            if (r += 256,
                            1792 & t)
                                continue;
                            if (r -= 2048,
                            f <<= 1,
                            224 & (t -= 2016))
                                continue;
                            r += 1792
                        }
                        if (6144 <= (8191 & (t += 1792))) {
                            i = 99999;
                            break
                        }
                    }
                } while (i <= n);J = t,
                R = i,
                M = u,
                D = o
            }
        }
        var B, H, j, X, Y, Z, G, K, P = 0, Q = 0, V = 0, nn = 0, tn = -1;
        function un(n) {
            var t = P;
            if (!(n < t)) {
                tn = -1;
                var i = Q
                  , u = V
                  , o = G * (u + L)
                  , f = F + (F + 32 + F) * L + (F + 32 + F) * u + i
                  , c = C[nn << 3];
                do {
                    if (E[f] !== c && (E[f] = c,
                    Z(f, o, c),
                    O = -1),
                    f++,
                    t += 4,
                    !++i && 0 <= u && u < 192)
                        f += i = 32,
                        t += 128;
                    else if (32 + F <= i) {
                        if (i = -F,
                        ++u == 8 * (24 + L)) {
                            t = 99999;
                            break
                        }
                        t += l - 4 * (F + 32 + F),
                        o += G
                    }
                } while (t <= n);Q = i,
                V = u,
                P = t
            }
        }
        function f() {
            var n, t = X, i = t * A;
            for (H = B.createImageData(N, i),
            n = (j = H.data).length - 1; 0 < n; n -= 4)
                j[n] = 255;
            for (Y = [[0, 11406853, 198, 11996364, 311808, 12373765, 1032645, 12963275, 0, 12065042, 1316055, 13708518, 3008039, 15268407, 4781817, 16777215], [0, 11734533, 203, 12324305, 313344, 12702725, 1099466, 13292240, 0, 12392978, 1381853, 14101996, 3075113, 15662904, 4914431, 16777215, 0, 11144453, 192, 11668422, 244992, 12044549, 965823, 12568517, 0, 11737105, 1250258, 13314784, 2875430, 14873909, 4648946, 16777215]][--t],
            C = [],
            n = 0; n < 128; n++)
                C[128 | n] = C[n] = (n << 1 & 240 | n >> 3 & 8 | 7 & n) << 8;
            for (G = t * N,
            j = new Uint32Array(j.buffer),
            n = Y.length; 0 <= --n; )
                Y[n] |= -1 << 24;
            Z = [u, o][t]
        }
        function u(n, t, i) {
            var u = j
              , o = Y[i >> 12]
              , f = Y[i >> 8 & 15];
            for (n *= 8; u[n++] = 128 & i ? f : o,
            i <<= 1,
            7 & n; )
                ;
        }
        function o(n, t, i) {
            var u = j
              , o = i >> 12
              , f = i >> 8 & 15
              , c = Y[o]
              , r = Y[f] ^ c;
            for (o = Y[o + 16],
            f = Y[f + 16] ^ o,
            i ^= i >> 1 & 127,
            t += 8 * n; 128 & i && (c ^= r,
            o ^= f),
            i <<= 1,
            u[t] = c,
            u[t + N] = o,
            7 & ++t; )
                ;
        }
        function i() {
            H || f();
            for (var n, t = 0, i = 0, u = 0; u < 192 + 2 * L; u++) {
                for (n = 0; n < 32 + 2 * F; n++,
                t++)
                    Z(t, i, E[t]);
                i += G
            }
            on(-1)
        }
        function on(n) {
            var t = B
              , i = t.canvas
              , u = i.width - N >> 1
              , o = i.height - X * A >> 1;
            if (n < (O = 0))
                return t.putImageData(H, u, o);
            var f = r(n)
              , c = r(n ^ n - 1);
            function r(n) {
                var t = 0;
                return 65535 < n && (n >>= t = 16),
                255 < n && (n >>= 8,
                t += 8),
                15 < n && (n >>= 4,
                t += 4),
                t + (-21936 >> 2 * n & 3)
            }
            t.putImageData(H, u, o, 8 * F - 1, X * (8 * c + L) - 1, 258, 8 * X * (f - c + 1) + 2)
        }
        var fn, cn, rn, en, an = 0, vn = 0, sn = 0;
        function ln() {
            return 16 & _ ? 8 & _ ? en : rn : 0
        }
        function dn(n, t) {
            if (K) {
                var i = an * t / fn
                  , u = K.v
                  , o = K.p
                  , f = K.k;
                u[o] += i,
                u[o = o + 1 & f] += t - i;
                var c = o;
                for (n = an - cn * n; n < 0; )
                    n += fn,
                    u[o = o + 1 & f] = 0;
                an = n,
                (K.s - c & f) <= (o - c & f) && (K.s = o + 1 & f),
                K.p = o - 1 & f
            }
        }
        function bn(n) {
            var t, i = vn, u = ln(), o = u - sn;
            if (sn = u,
            pn) {
                for ((t = kn) || (o += $n(pn),
                t += 16),
                t += i; t < n; )
                    (u = $n(pn)) && (dn(t - i, o),
                    i = t,
                    o = u),
                    t += 16;
                kn = t - n
            }
            dn(n - i, o),
            vn = n
        }
        s.audio = function(n) {
            (K = n) && (cn = n.hz)
        }
        ,
        (s.volume = function(n) {
            rn = .93 * (en = n *= n),
            pn && hn(),
            sn = ln()
        }
        )(.5);
        var pn, kn = 0;
        function hn() {
            var n = en
              , t = pn.volt
              , i = 15;
            for (t[i] = n; t[--i] = n * [0, 14, 20, 29, 42, 62, 85, 137, 169, 265, 353, 450, 570, 687, 848][i] / 1e3,
            1 < i; )
                ;
            for (i = 8; i < 11; i++)
                mn(i, pn.reg[i]);
            pn.level = yn()
        }
        function mn(n, t) {
            switch (n) {
            case 0:
                pn.aper = 3840 & pn.aper | t;
                break;
            case 1:
                pn.aper = 255 & pn.aper | (t &= 15) << 8;
                break;
            case 2:
                pn.bper = 3840 & pn.bper | t;
                break;
            case 3:
                pn.bper = 255 & pn.bper | (t &= 15) << 8;
                break;
            case 4:
                pn.cper = 3840 & pn.cper | t;
                break;
            case 5:
                pn.cper = 255 & pn.cper | (t &= 15) << 8;
                break;
            case 6:
                pn.nper = t &= 31;
                break;
            case 7:
                pn.mix = ~(t | pn.dis);
                break;
            case 8:
            case 9:
            case 10:
                var i = t &= 31
                  , u = 9 << n - 8;
                t ? t < 16 ? (pn.dis &= u = ~u,
                pn.ech &= u) : (pn.dis &= ~u,
                pn.ech |= u,
                i = pn.estep ^ pn.eattack) : (pn.dis |= u,
                pn.ech &= ~u),
                pn.mix = ~(pn.reg[7] | pn.dis),
                i = pn.volt[i],
                n < 9 ? pn.avol = i : 9 < n ? pn.cvol = i : pn.bvol = i;
                break;
            case 11:
                pn.eper = 65280 & pn.eper | t;
                break;
            case 12:
                pn.eper = 255 & pn.eper | t << 8;
                break;
            case 13:
                (t &= 15) < 8 && (t = t < 4 ? 1 : 7),
                pn.ekeep = 1 & t ? 1 : -1,
                pn.ealt = t + 1 & 2 ? 15 : 0,
                pn.eattack = 4 & t ? 15 : 0,
                pn.estep = 15,
                pn.ecnt = -1,
                wn()
            }
            pn.reg[n] = t
        }
        function wn() {
            var n, t = pn.ech;
            t && (n = pn.volt[pn.estep ^ pn.eattack],
            1 & t && (pn.avol = n),
            2 & t && (pn.bvol = n),
            4 & t && (pn.cvol = n))
        }
        function $n(n) {
            var t, i = 0;
            return --n.acnt & n.aper || (n.acnt = -1,
            i ^= 1),
            --n.bcnt & n.bper || (n.bcnt = -1,
            i ^= 2),
            --n.ccnt & n.cper || (n.ccnt = -1,
            i ^= 4),
            (n.div16 ^= 1) && (--n.ncnt & n.nper || (n.ncnt = -1,
            1 & (t = n.noise) && (i ^= 56,
            t ^= 163840),
            n.noise = t >> 1),
            --n.ecnt & n.eper || (n.ecnt = -1,
            n.ekeep && (n.estep || (n.eattack ^= n.ealt,
            n.ekeep >>= 1,
            n.estep = 16),
            n.estep--,
            n.ech && (wn(),
            i |= 256)))),
            n.gen ^= i,
            t = 0,
            i & n.mix && (t = n.level - (n.level = yn())),
            t
        }
        function yn() {
            var n = pn.mix & pn.gen;
            return (9 & n ? 0 : pn.avol) + (18 & n ? 0 : pn.bvol) + (36 & n ? 0 : pn.cvol)
        }
        s.command = function(n, t) {
            function o(n, t) {
                [, d, b, p][n >> 14][16383 & n] = 255 & t
            }
            function i(n, t) {
                o(n, t),
                o(n + 1, t >> 8)
            }
            function u(n, t, i, u) {
                for (; 0 < u--; )
                    o(n++, t[i++])
            }
            t = t || 0;
            for (var f = s.rom48k, c = {
                i: 63,
                border: 7,
                rom: null,
                ay: "",
                iy: 23610,
                im: 1,
                iff: 3,
                model: t
            }, r = 16384; r < 22528; r++)
                o(r, 0);
            for (; r < 23296; r++)
                o(r, 56);
            for (; r < 65536; r++)
                o(r, 0);
            i(23732, --r),
            u(r -= 167, f, 15880, 168),
            i(23675, r--),
            o(23608, 64),
            i(23730, r),
            i(23606, 15360),
            o(r--, 62),
            i(23613, (c.sp = r) - 2),
            i(23631, 23734),
            u(23734, f, 5551, 21),
            r = 23754,
            i(23639, r++),
            i(23635, r),
            i(23627, r),
            o(r++, 128),
            i(23641, r);
            for (var e, a = 0; a < n.length; a++)
                o(r++, n.charCodeAt(a));
            i(r, 32781),
            i(23649, r += 2),
            i(23651, r),
            i(23653, r),
            o(23693, 56),
            o(23695, 56),
            o(23624, 56),
            i(23561, 1315),
            o(23552, 255),
            o(23556, 255),
            u(23568, f, 5574, 14),
            i(23688, 6177),
            o(23659, 2),
            i(23656, 23698),
            o(23611, 12),
            c.pc = 4788,
            t && (u(23296, s.rom128[0], 107, 88),
            o(23389, 207),
            i(23427, 60396),
            i(23429, 11244),
            o(23431, 1),
            (e = k[7])[r = 11254] = e[r + 2] = 0,
            e[r + 1] = 192,
            e[11285] = 20,
            e[14067] = 20,
            e[15723] = 5,
            e[(r = 11279) - 1] = 255,
            e[r] = e[r + 2] = 56,
            i(c.sp, 6932),
            i(23425, r = 23539),
            u(r, [231, 63, 43, 39, 231, 63, 122, 38, 49, 13, 103, 38], 0, 12),
            c.p7FFD = 0,
            c.pc = 619),
            o(23672, r = 32768 * Math.random() | 0),
            c.r = r >> 8,
            s.setState(c)
        }
    }, function(c) {
        var r, f, e, a, v, s, t, l, d, b, p, k, o, h, i, u, m, w, $, y, x, g, _, z, S, U, T, q, F, L;
        function N() {
            var n = 168 & e | e >> 8 & 1 | !a << 6
              , t = v
              , i = s >> 8
              , u = a ^ t;
            return n |= 2 & i,
            (n |= 16 & (u ^ s ^ i)) | 4 & (t = 256 & t ? 154020 >> (15 & (a ^ a >> 4)) : (u & (s ^ a)) >> 5)
        }
        function A(n) {
            a = 64 & ~n,
            e = n |= n << 8,
            v = 255 & (s = -129 & n | (4 & n) << 5)
        }
        function C(n) {
            S = 65280 & S | n,
            U = 127 & n
        }
        function E(n) {
            l = n >> 8,
            d = 255 & n
        }
        function I(n) {
            b = n >> 8,
            p = 255 & n
        }
        function O() {
            var n = y;
            y = l,
            l = n,
            n = x,
            x = d,
            d = n,
            n = g,
            g = b,
            b = n,
            n = _,
            _ = p,
            p = n,
            n = z,
            z = k,
            k = n
        }
        function R() {
            var n = i;
            i = f,
            f = n,
            n = u,
            u = e,
            e = n,
            n = m,
            m = a,
            a = n,
            n = w,
            w = v,
            v = n,
            n = $,
            $ = s,
            s = n
        }
        function n() {}
        function J(n) {
            c.time++,
            c.put(t - 1 & 65535, n >> 8),
            c.time += 3,
            c.put(t = t - 2 & 65535, 255 & n),
            c.time += 3
        }
        function M() {
            var n = c.get16(t);
            return t = t + 2 & 65535,
            c.time += 6,
            n
        }
        function D(n) {
            var t = (v = f) - n;
            s = ~n,
            e = 384 & t | 40 & n,
            a = 255 & t
        }
        function W(n) {
            return e = 256 & e | (a = n = (v = n) + (s = 1) & 255),
            n
        }
        function B(n) {
            return e = 256 & e | (a = n = (v = n) + (s = -1) & 255),
            n
        }
        function H(n) {
            e = 256 & e | (a = n),
            v = 256 | n,
            s = 0
        }
        function j(n) {
            e = 215 & e | 296 & n,
            s &= 128,
            v = 384 & v | 16 & a,
            f = 255 & n
        }
        function X(n, t) {
            var i = n + t;
            return e = 128 & e | i >> 8 & 296,
            v &= -17,
            s = 128 & s | 16 & ((i ^ n ^ t) >> 8 ^ a),
            L = n + 1,
            c.time += 7,
            65535 & i
        }
        function Y() {
            var n = c.get(r);
            return r = r + 1 & 65535,
            c.time += 3,
            n
        }
        function Z() {
            var n = c.get16(r);
            return r = r + 2 & 65535,
            c.time += 6,
            n
        }
        function G(n) {
            v &= -17,
            s = 128 & s | 16 & (n >> 4 ^ a),
            e = 256 ^ n | 128 & e | 40 & f
        }
        function K(n) {
            var t = L = Z();
            n && (r = t)
        }
        function P() {
            L = r = r + (128 ^ c.get(r)) - 127 & 65535,
            c.time += 8
        }
        function Q(n) {
            var t = L = Z();
            n && (J(r),
            r = t)
        }
        function V() {
            L = r = c.get16(t),
            t = t + 2 & 65535,
            c.time += 6
        }
        function nn() {
            F = !0;
            var n = c.time_limit - c.time + 3 >> 2;
            0 < n && (n = c.halt(n, S | U),
            U = U + n & 127,
            c.time += 4 * n)
        }
        function tn(n) {
            var t, i, u;
            n: for (; ; ) {
                switch (n) {
                case 221:
                case 253:
                    break;
                case 243:
                    q = 0;
                    break;
                case 251:
                    q = 3;
                    break;
                default:
                    $n[n]();
                    break n
                }
                if (i = n,
                n = c.m1(r, S | (U = U + 1 & 127)),
                r = r + 1 & 65535,
                c.time += 4,
                4 & i && (t = yn[n])) {
                    null != (u = t(221 == i ? o : h)) && (221 == i ? o = u : h = u);
                    break
                }
            }
            1 & q && 0 <= c.int && c.time < c.time_limit && un()
        }
        function un() {
            var n, t = c.int;
            U = U + 1 & 127,
            q = 0,
            F = !1,
            c.time += 6,
            T ? (J(r),
            n = 56,
            1 < T && (n = c.get16(65280 & S | t),
            c.time += 6),
            L = r = n) : $n[t]()
        }
        function on(n) {
            var t = c.get(r);
            return r = r + 1 & 65535,
            c.time += 8,
            L = n + (128 ^ t) - 128 & 65535
        }
        function fn(n) {
            var t = c.get(r);
            return r = r + 1 & 65535,
            c.time += 8,
            t = c.get(L = n + (128 ^ t) - 128 & 65535),
            c.time += 3,
            t
        }
        function cn(n, t) {
            var i = k + n + (e >> 8 & 1 ^ t);
            L = k + 1,
            e = i >> 8,
            v = k >> 8,
            s = n >> 8,
            k = i &= 65535,
            a = i >> 8 | i << 8,
            c.time += 7
        }
        function rn(n) {
            e = 256 & e | (f = n),
            a = +!!n,
            v = s = q << 6 & 128,
            c.time++
        }
        function en() {
            var n = l << 8 | d
              , t = c.inp(n);
            return L = 1 + n,
            H(t),
            c.time += 4,
            t
        }
        function an(n) {
            var t = l << 8 | d;
            L = 1 + t,
            c.out(t, n),
            c.time += 4
        }
        function vn(n, t) {
            var i, u = c.get(i = k);
            k = i + n & 65535,
            c.time += 3,
            c.put(i = b << 8 | p, u),
            b = (i += n) >> 8 & 255,
            p = 255 & i,
            c.time += 5,
            a = a && 1,
            e = 384 & e | 8 & (u += f) | u << 4 & 32,
            --d < (u = 0) && (l = l - 1 & (d = 255)),
            l | d && (t && (c.time += 5,
            L = 1 + (r = r - 2 & 65535)),
            u = 128),
            v = s = u
        }
        function sn(n, t) {
            var i, u, o = f - (u = c.get(i = k)) & 255;
            L += n,
            k = i + n & 65535,
            c.time += 8,
            a = 127 & o | o >> 7,
            s = ~(128 | u),
            v = 127 & f,
            --d < 0 && (l = l - 1 & (d = 255)),
            l | d && (v |= 128,
            s |= 128,
            t && o && (L = 1 + (r = r - 2 & 65535),
            c.time += 5)),
            e = 256 & e | 128 & o,
            16 & (o ^ u ^ f) && o--,
            e |= o << 4 & 32 | 8 & o
        }
        function ln(n) {
            var t, i, u = n >> 2, o = k + u & 65535, f = l << 8 | d;
            c.time++,
            1 & n ? (t = c.get(k),
            c.time += 3,
            L = (f = f - 256 & 65535) + u,
            c.out(f, t),
            c.time += 4,
            u = o) : (t = c.inp(f),
            c.time += 4,
            L = f + u,
            f = f - 256 & 65535,
            c.put(k, t),
            c.time += 3,
            u += f),
            u = (255 & u) + t,
            k = o,
            l = f >>= 8,
            2 & n && f && (c.time += 5,
            r = r - 2 & 65535),
            i = 7 & u ^ f,
            e = f | (u &= 256),
            v = 128 ^ (a = f),
            s = 128 & ((i = 4928640 >> (15 & (i ^ i >> 4))) ^ f) | u >> 4 | (128 & t) << 2
        }
        function dn() {
            f = a = 255 & (e = 1 + (s = ~f)),
            v = 0
        }
        function bn() {
            q |= q >> 1,
            V()
        }
        function pn() {
            T = 0
        }
        function kn() {
            T = 1
        }
        function hn() {
            T = 2
        }
        function mn(n, t) {
            switch (n) {
            case 0:
                t = 257 * t >> 7;
                break;
            case 1:
                t = t >> 1 | (1 + (1 & t) ^ 1) << 7;
                break;
            case 2:
                t = t << 1 | e >> 8 & 1;
                break;
            case 3:
                t = (513 * t | 256 & e) >> 1;
                break;
            case 4:
                t <<= 1;
                break;
            case 5:
                t = (513 * t + 128 ^ 128) >> 1;
                break;
            case 6:
                t = t << 1 | 1;
                break;
            case 7:
                t = 513 * t >> 1
            }
            return v = 256 | (a = t = 255 & (e = t)),
            s = 0,
            t
        }
        function wn(n, t) {
            e = 256 & e | 40 & t | (t &= 1 << n),
            v = ~(a = t),
            s = 0
        }
        this.env = c,
        r = S = U = T = q = 0,
        t = o = h = k = z = 65535,
        f = l = d = b = p = i = y = x = g = _ = 255,
        e = a = v = s = u = m = w = $ = 0,
        F = !1,
        this.getState = function() {
            var n = {
                pc: r,
                a: f,
                f: N(),
                sp: t,
                bc: l << 8 | d,
                de: b << 8 | p,
                hl: k,
                ix: o,
                iy: h,
                bc_: y << 8 | x,
                de_: g << 8 | _,
                hl_: z,
                a_: i,
                r: 128 & S | U,
                i: S >> 8,
                im: T,
                iff: q,
                halted: F
            };
            return R(),
            n.f_ = N(),
            R(),
            n
        }
        ,
        this.setState = function(n) {
            "pc"in n && (r = n.pc),
            "a"in n && (f = n.a),
            "f"in n && A(n.f),
            "sp"in n && (t = n.sp),
            "bc"in n && E(n.bc),
            "de"in n && I(n.de),
            "hl"in n && (k = n.hl),
            "ix"in n && (o = n.ix),
            "iy"in n && (h = n.iy),
            O(),
            R(),
            "bc_"in n && E(n.bc_),
            "de_"in n && I(n.de_),
            "hl_"in n && (k = n.hl_),
            "a_"in n && (f = n.a_),
            "f_"in n && A(n.f_),
            O(),
            R(),
            "r"in n && C(n.r),
            "i"in n && (S = 255 & S | n.i << 8),
            "im"in n && (T = 3 & n.im),
            "iff"in n && (q = n.iff),
            "halted"in n && (F = !!n.halted)
        }
        ,
        this.execute = function() {
            if (!(c.time >= c.time_limit)) {
                if (1 & q && 0 <= c.int && un(),
                F)
                    return nn();
                do {
                    var n = c.m1(r, S | (U = U + 1 & 127));
                    r = r + 1 & 65535,
                    c.time += 4,
                    $n[n]()
                } while (c.time < c.time_limit)
            }
        }
        ,
        this.nmi = function() {
            q &= 2,
            F = !1,
            J(r),
            c.time += 4,
            r = 102
        }
        ,
        this.reset = function() {
            F = !1,
            r = S = U = T = q = 0
        }
        ;
        var $n = [n, function() {
            var n = Z();
            l = n >> 8,
            d = 255 & n
        }
        , function() {
            var n = l << 8 | d;
            L = 1 + n & 255 | f << 8,
            c.put(n, f),
            c.time += 3
        }
        , function() {
            256 == ++d && (l = l + 1 & 255,
            d = 0),
            c.time += 2
        }
        , function() {
            l = W(l)
        }
        , function() {
            l = B(l)
        }
        , function() {
            l = Y()
        }
        , function() {
            j(257 * f >> 7)
        }
        , R, function() {
            k = X(k, l << 8 | d)
        }
        , function() {
            var n = l << 8 | d;
            L = 1 + n,
            f = c.get(n),
            c.time += 3
        }
        , function() {
            --d < 0 && (l = l - 1 & (d = 255)),
            c.time += 2
        }
        , function() {
            d = W(d)
        }
        , function() {
            d = B(d)
        }
        , function() {
            d = Y()
        }
        , function() {
            j(f >> 1 | (1 + (1 & f) ^ 1) << 7)
        }
        , function() {
            var n, t;
            c.time++,
            t = c.get(n = r),
            n++,
            c.time += 3,
            (l = l - 1 & 255) && (c.time += 5,
            L = n += (128 ^ t) - 128),
            r = 65535 & n
        }
        , function() {
            var n = Z();
            b = n >> 8,
            p = 255 & n
        }
        , function() {
            var n = b << 8 | p;
            L = 1 + n & 255 | f << 8,
            c.put(n, f),
            c.time += 3
        }
        , function() {
            256 == ++p && (b = b + 1 & 255,
            p = 0),
            c.time += 2
        }
        , function() {
            b = W(b)
        }
        , function() {
            b = B(b)
        }
        , function() {
            b = Y()
        }
        , function() {
            j(f << 1 | e >> 8 & 1)
        }
        , P, function() {
            k = X(k, b << 8 | p)
        }
        , function() {
            var n = b << 8 | p;
            L = 1 + n,
            f = c.get(n),
            c.time += 3
        }
        , function() {
            --p < 0 && (b = b - 1 & (p = 255)),
            c.time += 2
        }
        , function() {
            p = W(p)
        }
        , function() {
            p = B(p)
        }
        , function() {
            p = Y()
        }
        , function() {
            j((513 * f | 256 & e) >> 1)
        }
        , function() {
            (a ? P : Y)()
        }
        , function() {
            k = Z()
        }
        , function() {
            var n = Z();
            c.put(n, 255 & k),
            c.time += 3,
            c.put(L = n + 1 & 65535, k >> 8),
            c.time += 3
        }
        , function() {
            k = k + 1 & 65535,
            c.time += 2
        }
        , function() {
            k = 255 & k | W(k >> 8) << 8
        }
        , function() {
            k = 255 & k | B(k >> 8) << 8
        }
        , function() {
            k = 255 & k | Y() << 8
        }
        , function() {
            var n = 153 < (f | 256 & e) ? 352 : 0;
            9 < (15 & f | 16 & (a ^ v ^ s ^ s >> 8)) && (n += 6),
            v = 256 | f,
            512 & s ? (f -= n,
            s = ~n) : f += s = n,
            e = (a = f &= 255) | 256 & n
        }
        , function() {
            (a ? Y : P)()
        }
        , function() {
            k = X(k, k)
        }
        , function() {
            var n = Z();
            L = n + 1,
            k = c.get16(n),
            c.time += 6
        }
        , function() {
            k = k - 1 & 65535,
            c.time += 2
        }
        , function() {
            k = -256 & k | W(255 & k)
        }
        , function() {
            k = -256 & k | B(255 & k)
        }
        , function() {
            k = -256 & k | Y()
        }
        , function() {
            e = 384 & e | 40 & (f ^= 255),
            s |= -129,
            v = 384 & v | 16 & ~a
        }
        , function() {
            (256 & e ? Y : P)()
        }
        , function() {
            t = Z()
        }
        , function() {
            var n = Z();
            L = n + 1 & 255 | f << 8,
            c.put(n, f),
            c.time += 3
        }
        , function() {
            t = t + 1 & 65535,
            c.time += 2
        }
        , function() {
            var n = W(c.get(k));
            c.time += 4,
            c.put(k, n),
            c.time += 3
        }
        , function() {
            var n = B(c.get(k));
            c.time += 4,
            c.put(k, n),
            c.time += 3
        }
        , function() {
            c.put(k, Y()),
            c.time += 3
        }
        , function() {
            G(0)
        }
        , function() {
            (256 & e ? P : Y)()
        }
        , function() {
            k = X(k, t)
        }
        , function() {
            var n = Z();
            L = n + 1,
            f = c.get(n),
            c.time += 3
        }
        , function() {
            t = t - 1 & 65535,
            c.time += 2
        }
        , function() {
            f = W(f)
        }
        , function() {
            f = B(f)
        }
        , function() {
            f = Y()
        }
        , function() {
            G(256 & e)
        }
        , n, function() {
            l = d
        }
        , function() {
            l = b
        }
        , function() {
            l = p
        }
        , function() {
            l = k >> 8
        }
        , function() {
            l = 255 & k
        }
        , function() {
            l = c.get(k),
            c.time += 3
        }
        , function() {
            l = f
        }
        , function() {
            d = l
        }
        , n, function() {
            d = b
        }
        , function() {
            d = p
        }
        , function() {
            d = k >> 8
        }
        , function() {
            d = 255 & k
        }
        , function() {
            d = c.get(k),
            c.time += 3
        }
        , function() {
            d = f
        }
        , function() {
            b = l
        }
        , function() {
            b = d
        }
        , n, function() {
            b = p
        }
        , function() {
            b = k >> 8
        }
        , function() {
            b = 255 & k
        }
        , function() {
            b = c.get(k),
            c.time += 3
        }
        , function() {
            b = f
        }
        , function() {
            p = l
        }
        , function() {
            p = d
        }
        , function() {
            p = b
        }
        , n, function() {
            p = k >> 8
        }
        , function() {
            p = 255 & k
        }
        , function() {
            p = c.get(k),
            c.time += 3
        }
        , function() {
            p = f
        }
        , function() {
            k = 255 & k | l << 8
        }
        , function() {
            k = 255 & k | d << 8
        }
        , function() {
            k = 255 & k | b << 8
        }
        , function() {
            k = 255 & k | p << 8
        }
        , n, function() {
            k = 255 & k | (255 & k) << 8
        }
        , function() {
            k = 255 & k | c.get(k) << 8,
            c.time += 3
        }
        , function() {
            k = 255 & k | f << 8
        }
        , function() {
            k = -256 & k | l
        }
        , function() {
            k = -256 & k | d
        }
        , function() {
            k = -256 & k | b
        }
        , function() {
            k = -256 & k | p
        }
        , function() {
            k = -256 & k | k >> 8
        }
        , n, function() {
            k = -256 & k | c.get(k),
            c.time += 3
        }
        , function() {
            k = -256 & k | f
        }
        , function() {
            c.put(k, l),
            c.time += 3
        }
        , function() {
            c.put(k, d),
            c.time += 3
        }
        , function() {
            c.put(k, b),
            c.time += 3
        }
        , function() {
            c.put(k, p),
            c.time += 3
        }
        , function() {
            c.put(k, k >> 8),
            c.time += 3
        }
        , function() {
            c.put(k, 255 & k),
            c.time += 3
        }
        , nn, function() {
            c.put(k, f),
            c.time += 3
        }
        , function() {
            f = l
        }
        , function() {
            f = d
        }
        , function() {
            f = b
        }
        , function() {
            f = p
        }
        , function() {
            f = k >> 8
        }
        , function() {
            f = 255 & k
        }
        , function() {
            f = c.get(k),
            c.time += 3
        }
        , n, function() {
            f = a = 255 & (e = (v = f) + (s = l))
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = d))
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = b))
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = p))
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = k >> 8))
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = 255 & k))
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = c.get(k))),
            c.time += 3
        }
        , function() {
            f = a = 255 & (e = 2 * (v = s = f))
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = l) + (e >> 8 & 1))
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = d) + (e >> 8 & 1))
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = b) + (e >> 8 & 1))
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = p) + (e >> 8 & 1))
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = k >> 8) + (e >> 8 & 1))
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = 255 & k) + (e >> 8 & 1))
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = c.get(k)) + (e >> 8 & 1)),
            c.time += 3
        }
        , function() {
            f = a = 255 & (e = 2 * (v = s = f) + (e >> 8 & 1))
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = ~l) + 1)
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = ~d) + 1)
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = ~b) + 1)
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = ~p) + 1)
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = ~(k >> 8)) + 1)
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = ~(255 & k)) + 1)
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = ~c.get(k)) + 1),
            c.time += 3
        }
        , function() {
            s = ~(v = f),
            f = a = e = 0
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = ~l) + (e >> 8 & 1 ^ 1))
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = ~d) + (e >> 8 & 1 ^ 1))
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = ~b) + (e >> 8 & 1 ^ 1))
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = ~p) + (e >> 8 & 1 ^ 1))
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = ~(k >> 8)) + (e >> 8 & 1 ^ 1))
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = ~(255 & k)) + (e >> 8 & 1 ^ 1))
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = ~c.get(k)) + (e >> 8 & 1 ^ 1)),
            c.time += 3
        }
        , function() {
            s = ~(v = f),
            f = a = 255 & (e = (e >> 8 & 1 ^ 1) - 1)
        }
        , function() {
            v = ~(f = e = a = f & l),
            s = 0
        }
        , function() {
            v = ~(f = e = a = f & d),
            s = 0
        }
        , function() {
            v = ~(f = e = a = f & b),
            s = 0
        }
        , function() {
            v = ~(f = e = a = f & p),
            s = 0
        }
        , function() {
            v = ~(f = e = a = f & k >> 8),
            s = 0
        }
        , function() {
            v = ~(f = e = a = f & k & 255),
            s = 0
        }
        , function() {
            v = ~(f = e = a = f & c.get(k)),
            s = 0,
            c.time += 3
        }
        , function() {
            v = ~(e = a = f),
            s = 0
        }
        , function() {
            v = 256 | (f = e = a = f ^ l),
            s = 0
        }
        , function() {
            v = 256 | (f = e = a = f ^ d),
            s = 0
        }
        , function() {
            v = 256 | (f = e = a = f ^ b),
            s = 0
        }
        , function() {
            v = 256 | (f = e = a = f ^ p),
            s = 0
        }
        , function() {
            v = 256 | (f = e = a = f ^ k >> 8),
            s = 0
        }
        , function() {
            v = 256 | (f = e = a = f ^ 255 & k),
            s = 0
        }
        , function() {
            v = 256 | (f = e = a = f ^ c.get(k)),
            s = 0,
            c.time += 3
        }
        , function() {
            f = e = a = s = 0,
            v = 256
        }
        , function() {
            v = 256 | (f = e = a = f | l),
            s = 0
        }
        , function() {
            v = 256 | (f = e = a = f | d),
            s = 0
        }
        , function() {
            v = 256 | (f = e = a = f | b),
            s = 0
        }
        , function() {
            v = 256 | (f = e = a = f | p),
            s = 0
        }
        , function() {
            v = 256 | (f = e = a = f | k >> 8),
            s = 0
        }
        , function() {
            v = 256 | (f = e = a = f | 255 & k),
            s = 0
        }
        , function() {
            v = 256 | (f = e = a = f | c.get(k)),
            s = 0,
            c.time += 3
        }
        , function() {
            v = 256 | (e = a = f),
            s = 0
        }
        , function() {
            D(l)
        }
        , function() {
            D(d)
        }
        , function() {
            D(b)
        }
        , function() {
            D(p)
        }
        , function() {
            D(k >> 8)
        }
        , function() {
            D(255 & k)
        }
        , function() {
            D(c.get(k)),
            c.time += 3
        }
        , function() {
            D(f)
        }
        , function() {
            c.time++,
            a && V()
        }
        , function() {
            var n = M();
            l = n >> 8,
            d = 255 & n
        }
        , function() {
            K(a)
        }
        , function() {
            L = r = Z()
        }
        , function() {
            Q(a)
        }
        , function() {
            J(l << 8 | d)
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = Y()))
        }
        , function() {
            J(r),
            L = r = 0
        }
        , function() {
            c.time++,
            a || V()
        }
        , V, function() {
            K(!a)
        }
        , function() {
            var n, t, i = c.m1(r, S | (U = U + 1 & 127));
            r = r + 1 & 65535,
            c.time += 4,
            n = 7 & (t = i >> 3),
            t = 8 & t | 7 & i,
            i < 128 ? gn[t](n) : _n[t](1 << n)
        }
        , function() {
            Q(!a)
        }
        , function() {
            var n = Z();
            J(r),
            L = r = n
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = Y()) + (e >> 8 & 1))
        }
        , function() {
            J(r),
            L = r = 8
        }
        , function() {
            c.time++,
            256 & e || V()
        }
        , function() {
            var n = M();
            b = n >> 8,
            p = 255 & n
        }
        , function() {
            K(!(256 & e))
        }
        , function() {
            var n = Y() | f << 8;
            c.out(n, f),
            L = 1 + n & 255 | 65280 & n,
            c.time += 4
        }
        , function() {
            Q(!(256 & e))
        }
        , function() {
            J(b << 8 | p)
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = ~Y()) + 1)
        }
        , function() {
            J(r),
            L = r = 16
        }
        , function() {
            c.time++,
            256 & e && V()
        }
        , O, function() {
            K(256 & e)
        }
        , function() {
            var n = Y() | f << 8;
            L = 1 + n,
            f = c.inp(n),
            c.time += 4
        }
        , function() {
            Q(256 & e)
        }
        , function() {
            tn(221)
        }
        , function() {
            f = a = 255 & (e = (v = f) + (s = ~Y()) + (e >> 8 & 1 ^ 1))
        }
        , function() {
            J(r),
            L = r = 24
        }
        , function() {
            c.time++,
            4 & N() ^ 4 && V()
        }
        , function() {
            k = M()
        }
        , function() {
            K(4 & N() ^ 4)
        }
        , function() {
            L = M(),
            J(k),
            k = L,
            c.time += 2
        }
        , function() {
            Q(4 & N() ^ 4)
        }
        , function() {
            J(k)
        }
        , function() {
            v = ~(f = e = a = f & Y()),
            s = 0
        }
        , function() {
            J(r),
            L = r = 32
        }
        , function() {
            c.time++,
            4 & N() && V()
        }
        , function() {
            r = k
        }
        , function() {
            K(4 & N())
        }
        , function() {
            var n = k;
            k = b << 8 | p,
            b = n >> 8,
            p = 255 & n
        }
        , function() {
            Q(4 & N())
        }
        , function() {
            var n = xn[c.m1(r, S | (U = U + 1 & 127))];
            r = r + 1 & 65535,
            c.time += 4,
            n && n()
        }
        , function() {
            v = 256 | (f = e = a = f ^ Y()),
            s = 0
        }
        , function() {
            J(r),
            L = r = 40
        }
        , function() {
            c.time++,
            128 & e || V()
        }
        , function() {
            var n;
            A(255 & (n = M())),
            f = n >> 8
        }
        , function() {
            K(!(128 & e))
        }
        , function() {
            tn(243)
        }
        , function() {
            Q(!(128 & e))
        }
        , function() {
            J(f << 8 | N())
        }
        , function() {
            v = 256 | (f = e = a = f | Y()),
            s = 0
        }
        , function() {
            J(r),
            L = r = 48
        }
        , function() {
            c.time++,
            128 & e && V()
        }
        , function() {
            t = k,
            c.time += 2
        }
        , function() {
            K(128 & e)
        }
        , function() {
            tn(251)
        }
        , function() {
            Q(128 & e)
        }
        , function() {
            tn(253)
        }
        , function() {
            D(Y())
        }
        , function() {
            J(r),
            L = r = 56
        }
        ]
          , yn = [, , , , , , , , , function(n) {
            return X(n, l << 8 | d)
        }
        , , , , , , , , , , , , , , , , function(n) {
            return X(n, b << 8 | p)
        }
        , , , , , , , , Z, function(n) {
            var t = Z();
            c.put(t, 255 & n),
            c.time += 3,
            c.put(L = t + 1 & 65535, n >> 8),
            c.time += 3
        }
        , function(n) {
            return n = n + 1 & 65535,
            c.time += 2,
            n
        }
        , function(n) {
            return 255 & n | W(n >> 8) << 8
        }
        , function(n) {
            return 255 & n | B(n >> 8) << 8
        }
        , function(n) {
            return 255 & n | Y() << 8
        }
        , , , function(n) {
            return X(n, n)
        }
        , function(n) {
            var t = Z();
            return L = t + 1,
            n = c.get16(t),
            c.time += 6,
            n
        }
        , function(n) {
            return n = n - 1 & 65535,
            c.time += 2,
            n
        }
        , function(n) {
            return -256 & n | W(255 & n)
        }
        , function(n) {
            return -256 & n | B(255 & n)
        }
        , function(n) {
            return -256 & n | Y()
        }
        , , , , , , function(n) {
            var t = on(n)
              , i = W(c.get(t));
            c.time += 4,
            c.put(t, i),
            c.time += 3
        }
        , function(n) {
            var t = on(n)
              , i = B(c.get(t));
            c.time += 4,
            c.put(t, i),
            c.time += 3
        }
        , function(n) {
            var t, i = on(n);
            c.time += -5,
            t = Y(),
            c.time += 2,
            c.put(i, t),
            c.time += 3
        }
        , , , function(n) {
            return X(n, t)
        }
        , , , , , , , , , , , function(n) {
            l = n >> 8
        }
        , function(n) {
            l = 255 & n
        }
        , function(n) {
            l = fn(n)
        }
        , , , , , , function(n) {
            d = n >> 8
        }
        , function(n) {
            d = 255 & n
        }
        , function(n) {
            d = fn(n)
        }
        , , , , , , function(n) {
            b = n >> 8
        }
        , function(n) {
            b = 255 & n
        }
        , function(n) {
            b = fn(n)
        }
        , , , , , , function(n) {
            p = n >> 8
        }
        , function(n) {
            p = 255 & n
        }
        , function(n) {
            p = fn(n)
        }
        , , function(n) {
            return 255 & n | l << 8
        }
        , function(n) {
            return 255 & n | d << 8
        }
        , function(n) {
            return 255 & n | b << 8
        }
        , function(n) {
            return 255 & n | p << 8
        }
        , , function(n) {
            return 255 & n | (255 & n) << 8
        }
        , function(n) {
            k = 255 & k | fn(n) << 8
        }
        , function(n) {
            return 255 & n | f << 8
        }
        , function(n) {
            return -256 & n | l
        }
        , function(n) {
            return -256 & n | d
        }
        , function(n) {
            return -256 & n | b
        }
        , function(n) {
            return -256 & n | p
        }
        , function(n) {
            return -256 & n | n >> 8
        }
        , , function(n) {
            k = -256 & k | fn(n)
        }
        , function(n) {
            return -256 & n | f
        }
        , function(n) {
            c.put(on(n), l),
            c.time += 3
        }
        , function(n) {
            c.put(on(n), d),
            c.time += 3
        }
        , function(n) {
            c.put(on(n), b),
            c.time += 3
        }
        , function(n) {
            c.put(on(n), p),
            c.time += 3
        }
        , function(n) {
            c.put(on(n), k >> 8),
            c.time += 3
        }
        , function(n) {
            c.put(on(n), 255 & k),
            c.time += 3
        }
        , , function(n) {
            c.put(on(n), f),
            c.time += 3
        }
        , , , , , function(n) {
            f = n >> 8
        }
        , function(n) {
            f = 255 & n
        }
        , function(n) {
            f = fn(n)
        }
        , , , , , , function(n) {
            f = a = 255 & (e = (v = f) + (s = n >> 8))
        }
        , function(n) {
            f = a = 255 & (e = (v = f) + (s = 255 & n))
        }
        , function(n) {
            f = a = 255 & (e = (v = f) + (s = fn(n)))
        }
        , , , , , , function(n) {
            f = a = 255 & (e = (v = f) + (s = n >> 8) + (e >> 8 & 1))
        }
        , function(n) {
            f = a = 255 & (e = (v = f) + (s = 255 & n) + (e >> 8 & 1))
        }
        , function(n) {
            f = a = 255 & (e = (v = f) + (s = fn(n)) + (e >> 8 & 1))
        }
        , , , , , , function(n) {
            f = a = 255 & (e = (v = f) + (s = ~(n >> 8)) + 1)
        }
        , function(n) {
            f = a = 255 & (e = (v = f) + (s = ~(255 & n)) + 1)
        }
        , function(n) {
            f = a = 255 & (e = (v = f) + (s = ~fn(n)) + 1)
        }
        , , , , , , function(n) {
            f = a = 255 & (e = (v = f) + (s = ~(n >> 8)) + (e >> 8 & 1 ^ 1))
        }
        , function(n) {
            f = a = 255 & (e = (v = f) + (s = ~(255 & n)) + (e >> 8 & 1 ^ 1))
        }
        , function(n) {
            f = a = 255 & (e = (v = f) + (s = ~fn(n)) + (e >> 8 & 1 ^ 1))
        }
        , , , , , , function(n) {
            v = ~(f = e = a = f & n >> 8),
            s = 0
        }
        , function(n) {
            v = ~(f = e = a = f & n & 255),
            s = 0
        }
        , function(n) {
            v = ~(f = e = a = f & fn(n)),
            s = 0
        }
        , , , , , , function(n) {
            v = 256 | (f = e = a = f ^ n >> 8),
            s = 0
        }
        , function(n) {
            v = 256 | (f = e = a = f ^ 255 & n),
            s = 0
        }
        , function(n) {
            v = 256 | (f = e = a = f ^ fn(n)),
            s = 0
        }
        , , , , , , function(n) {
            v = 256 | (f = e = a = f | n >> 8),
            s = 0
        }
        , function(n) {
            v = 256 | (f = e = a = f | 255 & n),
            s = 0
        }
        , function(n) {
            v = 256 | (f = e = a = f | fn(n)),
            s = 0
        }
        , , , , , , function(n) {
            D(n >> 8)
        }
        , function(n) {
            D(255 & n)
        }
        , function(n) {
            D(fn(n))
        }
        , , , , , , , , , , , , , function(n) {
            var t, i, u, o = L = n + (128 ^ c.get(r)) - 128 & 65535;
            switch (c.time += 3,
            t = c.get(r + 1 & 65535),
            r = r + 2 & 65535,
            c.time += 5,
            i = c.get(o),
            c.time += 4,
            u = t >> 3 & 7,
            192 & t) {
            case 0:
                i = mn(u, i);
                break;
            case 64:
                return wn(u, i),
                void (e = 384 & e | o >> 8 & 40);
            case 128:
                i &= ~(1 << u);
                break;
            case 192:
                i |= 1 << u
            }
            switch (c.put(o, i),
            c.time += 3,
            7 & t) {
            case 0:
                l = i;
                break;
            case 1:
                d = i;
                break;
            case 2:
                b = i;
                break;
            case 3:
                p = i;
                break;
            case 4:
                k = 255 & k | i << 8;
                break;
            case 5:
                k = 65280 & k | i;
                break;
            case 7:
                f = i
            }
        }
        , , , , , , , , , , , , , , , , , , , , , , M, , function(n) {
            return L = M(),
            J(n),
            c.time += 2,
            L
        }
        , , J, , , , function(n) {
            r = n
        }
        , , , , , , , , , , , , , , , , function(n) {
            t = n,
            c.time += 2
        }
        ]
          , xn = [, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function() {
            l = en()
        }
        , function() {
            an(l)
        }
        , function() {
            cn(~(l << 8 | d), 1)
        }
        , function() {
            var n = Z();
            c.put(n, d),
            c.time += 3,
            c.put(L = n + 1 & 65535, l),
            c.time += 3
        }
        , dn, bn, pn, function() {
            S = 255 & S | f << 8,
            c.time++
        }
        , function() {
            d = en()
        }
        , function() {
            an(d)
        }
        , function() {
            cn(l << 8 | d, 0)
        }
        , function() {
            var n = Z();
            L = n + 1,
            n = c.get16(n),
            l = n >> 8,
            d = 255 & n,
            c.time += 6
        }
        , dn, bn, pn, function() {
            C(f),
            c.time++
        }
        , function() {
            b = en()
        }
        , function() {
            an(b)
        }
        , function() {
            cn(~(b << 8 | p), 1)
        }
        , function() {
            var n = Z();
            c.put(n, p),
            c.time += 3,
            c.put(L = n + 1 & 65535, b),
            c.time += 3
        }
        , dn, bn, kn, function() {
            rn(S >> 8)
        }
        , function() {
            p = en()
        }
        , function() {
            an(p)
        }
        , function() {
            cn(b << 8 | p, 0)
        }
        , function() {
            var n = Z();
            L = n + 1,
            n = c.get16(n),
            b = n >> 8,
            p = 255 & n,
            c.time += 6
        }
        , dn, bn, hn, function() {
            rn(128 & S | U)
        }
        , function() {
            k = 255 & k | en() << 8
        }
        , function() {
            an(k >> 8)
        }
        , function() {
            cn(~k, 1)
        }
        , function() {
            var n = Z();
            c.put(n, 255 & k),
            c.time += 3,
            c.put(L = n + 1 & 65535, k >> 8),
            c.time += 3
        }
        , dn, bn, pn, function() {
            var n = c.get(k) | f << 8;
            c.time += 7,
            H(f = 240 & f | 15 & n),
            c.put(k, n >> 4 & 255),
            L = k + 1,
            c.time += 3
        }
        , function() {
            k = -256 & k | en()
        }
        , function() {
            an(255 & k)
        }
        , function() {
            cn(k, 0)
        }
        , function() {
            var n = Z();
            L = n + 1,
            k = c.get16(n),
            c.time += 6
        }
        , dn, bn, pn, function() {
            var n = c.get(k) << 4 | 15 & f;
            c.time += 7,
            H(f = 240 & f | n >> 8),
            c.put(k, 255 & n),
            L = k + 1,
            c.time += 3
        }
        , en, function() {
            an(0)
        }
        , function() {
            cn(~t, 1)
        }
        , function() {
            var n = Z();
            c.put(n, 255 & t),
            c.time += 3,
            c.put(L = n + 1 & 65535, t >> 8),
            c.time += 3
        }
        , dn, bn, kn, , function() {
            f = en()
        }
        , function() {
            an(f)
        }
        , function() {
            cn(t, 0)
        }
        , function() {
            var n = Z();
            L = n + 1,
            t = c.get16(n),
            c.time += 6
        }
        , dn, bn, hn, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function() {
            vn(1, 0)
        }
        , function() {
            sn(1, 0)
        }
        , function() {
            ln(4)
        }
        , function() {
            ln(5)
        }
        , , , , , function() {
            vn(-1, 0)
        }
        , function() {
            sn(-1, 0)
        }
        , function() {
            ln(-4)
        }
        , function() {
            ln(-3)
        }
        , , , , , function() {
            vn(1, 1)
        }
        , function() {
            sn(1, 1)
        }
        , function() {
            ln(6)
        }
        , function() {
            ln(7)
        }
        , , , , , function() {
            vn(-1, 1)
        }
        , function() {
            sn(-1, 1)
        }
        , function() {
            ln(-2)
        }
        , function() {
            ln(-1)
        }
        ]
          , gn = [function(n) {
            l = mn(n, l)
        }
        , function(n) {
            d = mn(n, d)
        }
        , function(n) {
            b = mn(n, b)
        }
        , function(n) {
            p = mn(n, p)
        }
        , function(n) {
            k = 255 & k | mn(n, k >> 8) << 8
        }
        , function(n) {
            k = -256 & k | mn(n, 255 & k)
        }
        , function(n) {
            var t = mn(n, c.get(k));
            c.time += 4,
            c.put(k, t),
            c.time += 3
        }
        , function(n) {
            f = mn(n, f)
        }
        , function(n) {
            wn(n, l)
        }
        , function(n) {
            wn(n, d)
        }
        , function(n) {
            wn(n, b)
        }
        , function(n) {
            wn(n, p)
        }
        , function(n) {
            wn(n, k >> 8)
        }
        , function(n) {
            wn(n, 255 & k)
        }
        , function(n) {
            wn(n, c.get(k)),
            e = 384 & e | L >> 8 & 40,
            c.time += 4
        }
        , function(n) {
            wn(n, f)
        }
        ]
          , _n = [function(n) {
            l &= ~n
        }
        , function(n) {
            d &= ~n
        }
        , function(n) {
            b &= ~n
        }
        , function(n) {
            p &= ~n
        }
        , function(n) {
            k &= ~(n << 8)
        }
        , function(n) {
            k &= ~n
        }
        , function(n) {
            var t = c.get(k) & ~n;
            c.time += 4,
            c.put(k, t),
            c.time += 3
        }
        , function(n) {
            f &= ~n
        }
        , function(n) {
            l |= n
        }
        , function(n) {
            d |= n
        }
        , function(n) {
            b |= n
        }
        , function(n) {
            p |= n
        }
        , function(n) {
            k |= n << 8
        }
        , function(n) {
            k |= n
        }
        , function(n) {
            var t = c.get(k) | n;
            c.time += 4,
            c.put(k, t),
            c.time += 3
        }
        , function(n) {
            f |= n
        }
        ]
    })
}();
