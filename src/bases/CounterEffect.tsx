import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap';

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {

    const [counter, setCounter] = useState(5)
    const [seconds, setSeconds] = useState(0)
    const [msj, setMsj] = useState('')

    const refCounter = useRef<HTMLHeadingElement>(null)
    const refSeconds = useRef<NodeJS.Timer>()

    const handleClick = (): void => {
        setCounter( prev => Math.min( prev + 1,  MAXIMUN_COUNT))
    }

    useEffect(() => {

        refSeconds.current && clearInterval( refSeconds.current )
        refSeconds.current = setInterval( () => setSeconds( s => s + 1 ), 1000 )

        if( counter < 10 ) return;

        setMsj('Llegaste al valor maximo')

        const timeLine = gsap.timeline();

        timeLine.to( refCounter.current , { y: -10, duration: 0.2, ease: 'ease.out' })
                .to( refCounter.current , { y: 0, duration: 1, ease: 'bounce.out' })


    }, [counter])
    
  return (
    <>
        <h1>Counter Effect, Ref y GSAP :</h1>
        <h2 ref={ refCounter }>{ counter }</h2>
        <h3>Segundos: { seconds }</h3>
        <h3 style={{color: '#852929'}}>{ msj }</h3>

        <button onClick={ handleClick }>+1</button>
    </>
  )
}
