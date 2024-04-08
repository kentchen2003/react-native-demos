import { Path, Skia, useClockValue, useComputedValue } from '@shopify/react-native-skia';
import { curveBasis, line } from 'd3'
import { Dimensions } from 'react-native';

const freq = 2;//频率
const amp = 10;//振幅
const { width, height } = Dimensions.get("screen");

const createWavePath = (phase, offset) => {
    let line1 = Array.from({ length: width }, (_, index) => {
        return [
            index,
            amp * Math.sin(Math.PI * freq * index / width + phase) + offset
        ]
    })

    let line2 = Array.from({ length: width }, (_, index) => {
        return [
            width - index - 1,
            (amp + 0.8) * Math.sin(Math.PI * (freq + 0.8) * (width - index - 1) / width + phase + 300) + offset + 100
        ]
    })

    const lineGenerator = line().curve(curveBasis)
    const mergeLine = lineGenerator([...line1, ...line2]);
    return `${mergeLine} Z`
}

export default function Wave() {
    const clock = useClockValue()

    const animatedPath = useComputedValue(() => {
        const phase = clock.current / 400 % 400
        return Skia.Path.MakeFromSVGString(createWavePath(phase, height / 2 - 50))
    }, [clock])

    return <Path path={animatedPath} style='fill' color="rgb(253, 149, 107)" />
}

