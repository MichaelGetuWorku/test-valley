import styles from './header.module.css';

export default function HeaderNav() {
    return (
        <>
            <header className={styles.container}>
                <div className={styles.divNav}>
                    <div className={styles.divImg}><img src="https://www.testvalley.kr/logo/logo-new.svg" alt="testvalley"
                                                     className={styles.testvally}/>
                        <div className={styles.text}>카테고리</div>
                        <div className={styles.textImg}><img src="https://www.testvalley.kr/common/search.svg" alt=""
                                                         className={styles.searchImg}/><input
                            type="search"
                            placeholder="살까말까 고민된다면 검색해보세요!"
                            className={styles.searchInput}
                            value=""/></div>
                    </div>
                    <div className={styles.leftBtn}>
                        <button><img src="https://www.testvalley.kr/common/home-event.svg" alt=""/></button>
                        <img className="bar" src="/common/vertical-bar.svg" alt=""/>
                        <button>로그인 / 회원가입</button>
                    </div>
                </div>
            </header>
        </>
    );
}
