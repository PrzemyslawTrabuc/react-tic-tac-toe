(this["webpackJsonpmoja-aplikacja"]=this["webpackJsonpmoja-aplikacja"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(2),i=n(3),a=n(5),r=n(4),o=n(1),l=n.n(o),c=n(8),u=n.n(c),d=(n(13),n(6)),h=n(0);var b=function(e){return Object(h.jsx)("button",{className:"square "+e.slot_flag,onClick:e.onClick,children:e.symbol})};var j=function(e){Object(a.a)(n,e);var t=Object(r.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"renderSquare",value:function(e){var t,n=this;return this.stored_slots=JSON.parse(window.localStorage.getItem("table")),t=!this.win_slots||this.win_slots[0]!==e&&this.win_slots[1]!==e&&this.win_slots[2]!==e?"neutral":"win",Object(h.jsx)(b,{className:"bob",slot_flag:t,symbol:this.stored_slots[e],onClick:function(){return n.props.onClick(e)}})}},{key:"render",value:function(){return this.win_slots=function(e){e=JSON.parse(window.localStorage.getItem("table"));for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var s=Object(d.a)(t[n],3),i=s[0],a=s[1],r=s[2];if(e[i]&&e[i]===e[a]&&e[i]===e[r])var o=t[n]}return o}(this.stored_slots),Object(h.jsxs)("div",{id:"board",children:[Object(h.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(h.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(h.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),n}(l.a.Component),v=n.p+"static/media/start-sound.6b00a5f1.wav",f=n.p+"static/media/click-sound.ae2de8e7.wav",w=n.p+"static/media/end-sound.492ea39f.wav",O=n.p+"static/media/draw-sound.7ebf8a8f.wav",m=n.p+"static/media/reset-sound.b222ebf0.wav";function y(e){return Object(h.jsx)("div",{className:"winner",children:e.winnerPlayer})}function x(e){return Object(h.jsx)("button",{className:"resetButton",onClick:e.onClick,children:"RESTART"})}var _=function(e){Object(a.a)(n,e);var t=Object(r.a)(n);function n(e){var i;Object(s.a)(this,n);var a=[];if(0!==localStorage.length)for(var r=JSON.parse(window.localStorage.getItem("table")),o=0;o<9;o++)a[o]=r[o];else for(var l=0;l<9;l++)a[l]=null;var c=!0;return"false"===window.localStorage.getItem("nextPlayer")&&(c=!1),(i=t.call(this,e)).state={slots:a,Player_X_is_next:c},i.isMovePossible=!0,i.winner="",i}return Object(i.a)(n,[{key:"handleResetButton",value:function(){var e=this.state.slots.slice();!function(e){for(var t=0;t<9;t++)e[t]=null}(e),this.setState({slots:e}),this.isMovePossible=!0,new Audio(m).play().then((function(){})).catch((function(e){console.log(e)}))}},{key:"handleClick",value:function(e){var t=this.state.slots.slice();!1!==this.isMovePossible&&(!0===this.state.Player_X_is_next&&null===t[e]?(t[e]="X",this.setState({slots:t,Player_X_is_next:!1})):!1===this.state.Player_X_is_next&&null===t[e]&&(t[e]="O",this.setState({slots:t,Player_X_is_next:!0})),new Audio(f).play().then((function(){})).catch((function(e){console.log(e)})))}},{key:"renderResetButton",value:function(){var e=this;return!1!==this.isMovePossible&&this.state.slots.includes(null)?"":Object(h.jsx)(x,{className:"resetButton",onClick:function(){return e.handleResetButton()}})}},{key:"renderWinnerText",value:function(){if(this.winner||!this.state.slots.includes(null)){this.isMovePossible=!1;var e="Draw";if(this.winner)e="The Winner is: Player "+this.winner,new Audio(w).play().then((function(){})).catch((function(e){console.log(e)}));else new Audio(O).play().then((function(){})).catch((function(e){console.log(e)}));return Object(h.jsx)(y,{className:"winner",winnerPlayer:e})}return null}},{key:"renderGameStatus",value:function(){var e;window.localStorage.setItem("table",JSON.stringify(this.state.slots)),this.winner=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var s=Object(d.a)(t[n],3),i=s[0],a=s[1],r=s[2];if(e[i]&&e[i]===e[a]&&e[i]===e[r])return e[i]}return null}(this.state.slots),this.winner&&(this.isMovePossible=!1),e=!0===this.state.Player_X_is_next?"Next Player: X":"Next Player: O",window.localStorage.setItem("nextPlayer",this.state.Player_X_is_next);for(var t=!0,n=0;n<9;n++)null===this.state.slots[n]&&(t=!1);return!1!==this.isMovePossible&&!0!==t||(e="GAME OVER!"),e}},{key:"componentDidMount",value:function(){new Audio(v).play().then((function(){})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{id:"main",children:[Object(h.jsx)("div",{className:"status",children:this.renderGameStatus()}),Object(h.jsx)(j,{symbol:this.props.slots,onClick:function(t){return e.handleClick(t)}}),Object(h.jsx)("div",{className:"winner",children:this.renderWinnerText()}),Object(h.jsx)("div",{id:"reset_button_div",children:this.renderResetButton()})]})}}]),n}(l.a.Component),p=function(e){Object(a.a)(n,e);var t=Object(r.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"game",children:[Object(h.jsx)("div",{className:"game-board",children:Object(h.jsx)(_,{})}),Object(h.jsxs)("div",{className:"game-info",children:[Object(h.jsx)("div",{}),Object(h.jsx)("ol",{})]})]})}}]),n}(l.a.Component);u.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f27f8642.chunk.js.map