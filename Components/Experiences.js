import React from 'react'
import { Box, Avatar     } from "@chakra-ui/react"
import styles from '../styles/Work.module.css'
import { userinfo, headings } from '../Constants/userinfo'
import person from "../styles/projects/person_10.jpg"
import Image from 'next/image';

const Experiences = ({ currentTheme }) => {
    return (
        <div className={styles.experienceWrapper}>
            <h1 className={styles.workHeading} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Yoshlar ishlari agentligi</h1>
            <div className={styles.experienceCardWrapper} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                {
                    userinfo.experience.experienceList ?
                    userinfo.experience.experienceList.map((exp, key) => {
                            return (
                                <div className={styles.experienceCard} key={key} data-aos="fade-up">
                                    <Box borderWidth="1px" borderRadius="md" overflow="hidden">
                                        <div style={{ background: currentTheme.secondary, height: '150px' }}></div>
                                        <div className={styles.experienceCardContent}>
                                            <h3>{exp.company}</h3>
                                            <div className={styles.avatar}>
                                            <Image src={exp.companylogo} alt='thumbnail image' width={"200px"} height={'200px'} />
                                            </div>
                                            <div style={{ position: 'relative', top: '20px' }}>
                                                <h2>{exp.position}</h2>
                                                <h3>{exp.description}</h3>
                                            </div>
                                            <h4 style={{ color: currentTheme.subtext }}>{exp.time}</h4>
                                        </div>
                                    </Box>
                                </div>
                            )
                        }) : null
                }
            </div>
        </div>
    )
}

export default Experiences
