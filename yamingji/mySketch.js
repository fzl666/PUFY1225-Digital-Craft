let img;
function preload() {
img = loadImage('gaokejiyawenhuaqumingji.png')
img1 = loadImage('1.jpg')
img2 = loadImage('2.jpg')
img3 = loadImage('3.jpg')
img4 = loadImage('4.jpg')
img5 = loadImage('5.jpg')
img6 = loadImage('6.jpg')
img7 = loadImage('7.jpg')
img8 = loadImage('8.jpg')
img9 = loadImage('9.jpg')
img10 = loadImage('10.jpg')
img11 = loadImage('11.jpg')
img12 = loadImage('12.jpg')
img13 = loadImage('13.png')
img14 = loadImage('14.jpg')
img15 = loadImage('15.jpg')
img16 = loadImage('16.jpg')
img17 = loadImage('17.jpg')
img18 = loadImage('18.jpg')
img19 = loadImage('19.jpg')
img20 = loadImage('20.jpg')
img21 = loadImage('21.jpeg')
}

function setup() {
  createCanvas(400, 400);
  
}
function draw() {
let yatu=[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21]
  background('green');
  image(random(yatu), 180, 100, 200, 280 )
  image(img, 5,30,500,300 )

  let el1 = ['废墟', '深海', '反应堆', '学园', '腐烂', '东京', '三维', '四次元', '少管所', '流星', '闪闪', '南极', '消极', '幽浮', '网路', '暗狱', '离子态', '液态', '黑色', '抱抱', '暴力', '垃圾', '社会', '残暴', '残酷', '工口', '戮尸', '原味', '毛茸茸', '香香', '霹雳', '午夜', '美工刀', '爆浆', '机关枪', '无响应', '手术台', '麻风病', '虚拟', '速冻', '智能', '2000', '甜味', '华丽', '反社会', '玛利亚', '无', '梦之', '蔷薇', '无政府', '酷酷', '西伯利亚', '人造', '法外', '追杀', '通缉', '女子', '微型', '男子', '超', '毁灭', '大型', '绝望', '阴间', '死亡']
  let el2 = ['小丑', '仿生', '纳米', '原子', '丧', '电子', '十字架', '咩咩', '赛博', '野猪', '外星', '窒息', '变态', '触手', '小众', '悲情', '飞行', '绿色', '电动', '铁锈', '碎尸', '电音', '蠕动', '酸甜', '虚构', '乱码', '碳水', '内脏', '脑浆', '血管', '全裸', '绷带', '不合格', '光滑', '标本', '酸性', '碱性', '404', '变身', '反常', '樱桃', '碳基', '矫情', '病娇', '进化', '潮湿', '砂糖', '高潮', '变异', '复合盐', '伏特加', '抑郁', '暴躁', '不爱说话', '废物', '失败', '幻想型', '社恐', '苦涩', '粘液', '浓厚', '快乐', '中二病', '恶魔', 'emo']
  let el3 = ['天使', '精灵', '女孩', '男孩', '宝贝', '小妈咪', '虫', '菇', '公主', '少女', '少年', '1号机', '子', '恐龙', '蜈蚣', '蟑螂', '食人鱼', '小飞船', '舞女', '桃子', '团团', '精', '酱', '废料', '生物', '物质', '奶茶', '搅拌机', '液', '火锅', '祭司', '体', '实验品', '试验体', '小猫咪', '样本', '颗粒', '血块', '汽水', '蛙', '软体', '机器人', '人质', '小熊', '圣母', '胶囊', '乙女', '主义者', '屑', '垢', '污渍', '废人', '毛血旺', '怪人', '肉', '河豚', '豚', '藻类', '唾沫', '咒语', '建筑', '球', '小狗']
  textSize(30)
  fill('red')
  fill('blue')
  text('您的亚名是', 20, 180)
  fill('yellow')
  textSize(40)
  text(random(el1) + random(el2) + random(el3), 10, 380)
  noLoop()

}