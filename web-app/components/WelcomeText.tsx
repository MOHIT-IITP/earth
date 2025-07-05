'use client'
import SplitText from './SplitText'
import React from 'react'

const WelcomeText = () => {
    return (
        <div>
            <SplitText
                text="Welcome to Earth"
                className="text-6xl font-semibold text-center bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
            />
        </div>
    )
}

export default WelcomeText 