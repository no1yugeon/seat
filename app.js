const girlName = [
    "none",
    "강나연",
    "김가을",
    "김성주",
    "김지우",
    "박묘현",
    "박채원",
    "손승연",
    "양채은",
    "윤채원",
    "이예담",
    "이채은",
    "장지율",
    "정시현",
    "조은채",
    "한정인"
];

const boyName = [
    "none",
    "강준영",
    "김강민",
    "김민준",
    "김영광",
    "김재연",
    "남수호",
    "노윤재",
    "박유건",
    "변시완",
    "신승우",
    "우서율",
    "이범준",
    "이현성",
    "정민재",
    "조현호",
    "최준혁"
];

changedGirl = [];
changedBoy = [];
check = [];
all = [];

for (let i = 1; i <= 15; i++) {
    check[randomed = Math.random() * 15]++;
    if (check[randomed] >= 1) {
        i--;
        continue;
    }
    else changedGirl[i] = girlName[randomed];
}

for (let i = 1; i <= 15; i++) {
    check[i] = 0;
}

for (let i = 1; i <= 16; i++) {
    check[randomed = Math.random() * 16]++;
    if (check[randomed] >= 1) {
        i--;
        continue;
    }
    else changedBoy[i] = boyName[randomed];
}

for (let i = 1; i <= 31; i++) {
    check[i] = 0;
    if (i % 2 == 1) {
        all[i] = changedGirl[i / 2];
    }
    else {
        all[i] = changedBoy[i / 2 + 1];
    }
}

for (let i = 1; i <= 31; i++) {
    document.getElementsByClassName(toString(i)).innerText = all[i];
}