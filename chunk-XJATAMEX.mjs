var U=1,Y=.9,a=.8,H=.17,p=.1,u=.999,J=.9999;var k=.99,m=/[\\\/_+.#"@\[\(\{&]/,B=/[\\\/_+.#"@\[\(\{&]/g,K=/[\s-]/,X=/[\s-]/g;function G(c,f,P,C,h,A,O){if(A===f.length)return h===c.length?U:k;var T=`${h},${A}`;if(O[T]!==void 0)return O[T];for(var L=C.charAt(A),E=P.indexOf(L,h),S=0,_,N,R,M;E>=0;)_=G(c,f,P,C,E+1,A+1,O),_>S&&(E===h?_*=U:m.test(c.charAt(E-1))?(_*=a,R=c.slice(h,E-1).match(B),R&&h>0&&(_*=Math.pow(u,R.length))):K.test(c.charAt(E-1))?(_*=Y,M=c.slice(h,E-1).match(X),M&&h>0&&(_*=Math.pow(u,M.length))):(_*=H,h>0&&(_*=Math.pow(u,E-h))),c.charAt(E)!==f.charAt(A)&&(_*=J)),(_<p&&P.charAt(E-1)===C.charAt(A+1)||C.charAt(A+1)===C.charAt(A)&&P.charAt(E-1)!==C.charAt(A))&&(N=G(c,f,P,C,E+1,A+2,O),N*p>_&&(_=N*p)),_>S&&(S=_),E=P.indexOf(L,E+1);return O[T]=S,S}function D(c){return c.toLowerCase().replace(X," ")}function W(c,f){return G(c,f,D(c),D(f),0,0,{})}export{W as a};
