import React from 'react'
import { Card } from 'react-bootstrap'
import logo from '../../assets/weather-image.png'
import { useAppSelector } from '../../redux/hooks'
import { RootState } from '../../store'
import { getFormattedDate } from '../../helpers/monthMapper'
import './weatherTiles.scss'


const WeatherTiles = () => {
    const { dailyWeather, unit } = useAppSelector((state: RootState) => state.location);
    return (
        <div className='weather' data-testid='weather-component'>
            {dailyWeather?.time?.map((time: string, i: number) => (
                i < 5 && (
                <Card key={time}>
                    <Card.Body>
                        <Card.Title>{getFormattedDate(time)}</Card.Title>
                        <Card.Img variant="top" src={logo} />
                        <Card.Text>
                            <span>
                                <span className='temp-label'>Min temp: </span>
                                {dailyWeather.apparent_temperature_min[i]}{unit}
                            </span>
                            <span>
                                <span className='temp-label'>Max temp: </span>
                                {dailyWeather.apparent_temperature_max[i]}{unit}
                            </span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )
            ))}
        </div>
    );
}

export default React.memo(WeatherTiles);
