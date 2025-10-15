import React from 'react'

function ColoredText({ text }: { text: string }) {
    return (
        <span className='bg-gradient-to-r from-green-500 to-blue-400 bg-clip-text text-transparent'>
            {text}
        </span>
    )
}

export default ColoredText
