import React from "react"
import { css } from "@emotion/react"
import { HashLoader } from "react-spinners"

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
	display: block;
	margin: 0 auto;
	border-color: red;
`

const Spinner = () => {
	return (
		<div className="sweet-loading h-screen w-screen absolute top-0 left-0 flex justify-center items-center bg-base-300/30 z-50 backdrop-blur-md">
			<HashLoader css={override} size={75} />
		</div>
	)
}

export default Spinner
