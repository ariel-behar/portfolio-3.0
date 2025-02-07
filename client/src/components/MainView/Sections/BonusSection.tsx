import { lazy, useEffect, useState } from 'react'

import styled from '@mui/material/styles/styled'

import HumbleBeginnings from '../SectionsComponents/Bonus/HumbleBeginnings'
const LazySleepyDaniel = lazy(() => import('../SectionsComponents/Bonus/SleepyDaniel'))

import Box from '@mui/material/Box'

const StyledSectionBox = styled(Box)`
    background: rgb(180,180,180);
    background: linear-gradient(135deg, rgba(180,180,180,1) 0%, rgba(46,46,46,1) 72%);

    border-top: 3px solid ${(({ theme }) => theme.palette.custom.black.main)};
`

interface Props {
    loadSectionHandler: (sectionNum: number) => void
}

function BonusSection({ loadSectionHandler }: Props) {
    const [showDaniel, setShowDaniel] = useState<boolean>(false)

    useEffect(() => {
        loadSectionHandler(10)
    }, [loadSectionHandler])


    const onClickShowDanielHandler = (bool: boolean) => {
        setShowDaniel(bool)
    }

    return (
        <StyledSectionBox component='section' id='eight-section'>
            {
                showDaniel
                    ? <LazySleepyDaniel onClickShowDanielHandler={onClickShowDanielHandler} />
                    : <HumbleBeginnings onClickShowDanielHandler={onClickShowDanielHandler} />
            }

        </StyledSectionBox >
    )
}

export default BonusSection