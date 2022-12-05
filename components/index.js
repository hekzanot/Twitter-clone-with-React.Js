import React from 'react'
import cn from 'classnames'

import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import Photo from './photo'
import styles from './index.module.css'
import IconButton from './icon'
import * as Icon from '../components/icons'

function Tweet({text, name, datetime, slug}) {
    return (    
    <article className={styles.tweet}>

        {/* avatar */}
        <div className={styles.avatar}>
            <Photo/>
        </div>

        {/* body */}
        <div className={styles.body}>
            <header className={styles.header}>
                <span className={styles.name}>{name}</span> <span>@{slug}</span> · <span>{formatDistanceToNowStrict(datetime)}</span>
            </header>

            <div className={styles.content}>{text}

                {/* <h2>Merhaba</h2> */}
            
            </div>

            <footer className={styles.footer}>
                {/* reply */}
                <div className={styles.footerButton}>
                    <IconButton className={styles.actionButton}>
                        <Icon.Reply/>
                    </IconButton>
                    <span>3</span>
                </div>

                {/* retweet */}
                <div className={styles.footerButton}>
                    <IconButton className={styles.actionButton}>
                        <Icon.Retweet/>
                    </IconButton>
                    <span>12</span>
                </div>

                {/* like */}
                <div className={styles.footerButton}>
                    <IconButton className={styles.actionButton}>
                        <Icon.Like/>
                    </IconButton>
                </div>

                {/* share */}
                <div className={styles.footerButton}>
                    <IconButton className={styles.actionButton}>
                        <Icon.Share/>
                    </IconButton>
                </div>
            </footer>
        </div>

    </article>
    )
}

export default Tweet