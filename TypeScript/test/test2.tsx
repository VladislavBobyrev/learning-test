import React from 'react';


const a: JSX.Element = <div tabIndex={0}>
	<span>
		{1 + 1}
	</span>
</div>

const c  = 'oishafh'
// не будет работать тк tsx понимает это строку как элемент react
//const b = <string> c 

const b = c as string 
