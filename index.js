// 在index.js中直接嵌入数据，不再使用fetch
const linksData = [
    {"h4": "压缩解压", "name": "7-Zip", "baidu": "https://www.7-zip.org/download.html"},
    {"h4": "压缩解压", "name": "WinRAR", "baidu": "https://pan.baidu.com/s/"},
    {"h4": "压缩解压", "name": "Bandizip", "baidu": "https://pan.baidu.com/s/"},
    {"h4": "浏览器", "name": "Googel Chrome", "baidu": ""},
    {"h4": "浏览器", "name": "Edge", "baidu": "https://www.microsoft.com/zh-cn/edge/download?form=MA13FJ"},
    {"h4": "杀毒软件", "name": "火绒安全软件", "baidu": "https://huorong.cn/person5.html"},
    {"h4": "杀毒软件", "name": "360安全卫士 (是垃圾！)", "baidu": "https://pan.baidu.com/s/"},
    {"h4": "杀毒软件", "name": "腾讯电脑管家（是垃圾！）", "baidu": "https://pan.baidu.com/s/"},
    {"h4": "杀毒软件", "name": "金山毒霸（是垃圾！）", "baidu": "https://pan.baidu.com/s/"},
    {"h4": "最强播放器", "name": "potplayer", "baidu": "https://potplayer.tv/?lang=zh_CN"},
    {"h4": "截图软件", "name": "pixpin", "baidu": "https://apps.microsoft.com/detail/xp89f3cgsrzhc7?hl=zh-CN&gl=CN"},
    {"h4": "主题壁纸", "name": "巨应壁纸", "baidu": "https://apps.microsoft.com/detail/9mv8gk87mz05?launch=true&mode=full&hl=zh-cn&gl=cn&ocid=bingwebsearch"},
    {"h4": "远程控制", "name": "todesk", "baidu": "https://www.todesk.com/download.html"},
    {"h4": "卸载工具", "name": "geek", "baidu": "https://geekuninstaller.com/"},
    {"h4": "amos", "name": "Amos24", "baidu": "https://pan.baidu.com/s/12s3OUVjjnDPZ8w1FHVo8ww?pwd=9999"},
    {"h4": "amos", "name": "Amos26", "baidu": "https://pan.baidu.com/s/1dcKoeLnShgWw3OvjEMBFUQ?pwd=9999"},
    {"h4": "amos", "name": "Amos28", "baidu": "https://pan.baidu.com/s/1OKLyUVbRW66FbKC8OoVmrQ?pwd=9999"},
    {"h4": "amos", "name": "Amos29", "baidu": "https://pan.baidu.com/s/1F51G0PGVK8n4wJ3coCMDsg?pwd=9999"},
    {"h4": "Avantage", "name": "Avantage6.9.0", "baidu": "https://pan.baidu.com/s/16XfsAXxLXWBg4wD8nW9C7w?pwd=9999"},
    {"h4": "AxMath", "name": "AxMath2.6", "baidu": "https://pan.baidu.com/s/1dmZXTNh84YHkUI1t3w6sPQ?pwd=9999"},
    {"h4": "Cytoscape", "name": "Cytoscape3.7.1", "baidu": "https://pan.baidu.com/s/16Q7DX7Re9R_UTDedQTSA5w?pwd=9999"},
    {"h4": "Design Expert", "name": "Design Expert13", "baidu": "https://pan.baidu.com/s/1sucyVBIkc-dyVD0Gb1_eEw?pwd=9999"},
    {"h4": "FX Draw Tools", "name": "FX Draw Tools MultiDocs 24.05.01", "baidu": "https://pan.baidu.com/s/19gCaxVLmcW4UGxBX4By8WA?pwd=9999"},
    {"h4": "GraphPad Prism", "name": "GraphPad Prism10.1", "baidu": "https://pan.baidu.com/s/1liIau5YFQVKP0xplb3ERAA?pwd=9999"},
    {"h4": "Lingo", "name": "Lingo18", "baidu": "https://pan.baidu.com/s/1TMdWy_DFopglmkaPrgvbTw?pwd=9999"},
    {"h4": "Maple", "name": "Maple v2021", "baidu": "https://pan.baidu.com/s/18TGRoGdeHvbI4gZizW82uQ?pwd=9999"},
    {"h4": "Maple", "name": "Maple v2024", "baidu": "https://pan.baidu.com/s/1T5b3KNyscv-GCje9wKS6LA?pwd=9999"},
    {"h4": "Mathcad", "name": "Mathcad 15.0", "baidu": "https://pan.baidu.com/s/1F83U41H2Lk2g9VsaoDgx_A?pwd=9999"},
    {"h4": "Mathematica", "name": "Mathematica 10.3", "baidu": "https://pan.baidu.com/s/1gVw0g9339rqddSl7nMwzYg?pwd=9999"},
    {"h4": "Mathematica", "name": "Mathematica 11.3", "baidu": "https://pan.baidu.com/s/10ZHRYdl7g_IU8hf1QPprvQ?pwd=9999"},
    {"h4": "Mathematica", "name": "Mathematica 12", "baidu": "https://pan.baidu.com/s/1yNh-GsEo3ARDlEKQpaNHjQ?pwd=9999"},
    {"h4": "Mathematica", "name": "Mathematica 13", "baidu": "https://pan.baidu.com/s/1Vw1pT8KuZU7LZEHdCzWdlg?pwd=9999"},
    {"h4": "Mathematica", "name": "Mathematica 14", "baidu": "https://pan.baidu.com/s/1Tw1GmDjQO1LV3Iwv-tB8Gw?pwd=9999"},
    {"h4": "Mathematica", "name": "Mathematica 9.0", "baidu": "https://pan.baidu.com/s/15UKQlmnW7tdzMLXhequCbw?pwd=9999"},
    {"h4": "MATLAB", "name": "MATLAB R2016b", "baidu": "https://pan.baidu.com/s/1fV9-v2y4gayNfl2k8OAkQQ?pwd=9999"},
    {"h4": "MATLAB", "name": "MATLAB R2020b", "baidu": "https://pan.baidu.com/s/1eoVkUr6gJT2Ou8suEsko_w?pwd=9999"},
    {"h4": "MATLAB", "name": "MATLAB R2021b", "baidu": "https://pan.baidu.com/s/1CeoxdwIGxleJaF1n7werww?pwd=9999"},
    {"h4": "MATLAB", "name": "MATLAB R2022b", "baidu": "https://pan.baidu.com/s/1lpPuMz5cs72g3H5mU49Gkw?pwd=9999"},
    {"h4": "MATLAB", "name": "MATLAB R2023b", "baidu": "https://pan.baidu.com/s/1xJAx7o-cVsBeGvktq4vqgA?pwd=9999"},
    {"h4": "MATLAB", "name": "MATLAB R2024b", "baidu": "https://pan.baidu.com/s/1gtMEaVhW0yb2B0uxc-OjhQ?pwd=9999"},
    {"h4": "Minitab", "name": "Minitab21", "baidu": "https://pan.baidu.com/s/14paWlaHafItXOwTF7d7kZg?pwd=9999"},
    {"h4": "Minitab", "name": "Minitab22", "baidu": "https://pan.baidu.com/s/1NDpg9D2tLExy02YP7yXq_A?pwd=9999"},
    {"h4": "Mplus", "name": "Mplus7.4", "baidu": "https://pan.baidu.com/s/1yFzNFBKsn_8HxqcJxJniSA?pwd=9999"},
    {"h4": "Mplus", "name": "Mplus8.11", "baidu": "https://pan.baidu.com/s/1316qHGV21dIpzo1YQOG8Dg?pwd=9999"},
    {"h4": "Mplus", "name": "Mplus8.7", "baidu": "https://pan.baidu.com/s/15RvpKlGK9_i_sNMLEJ7DqA?pwd=9999"},
    {"h4": "Navicat", "name": "Navicat Premium17", "baidu": "https://pan.baidu.com/s/1x8dqHG-omENyKiEy1K33wA?pwd=9999"},
    {"h4": "NCSS", "name": "NCSS 2021", "baidu": "https://pan.baidu.com/s/1QYh1OtcVlvh7APRVRCPjqQ?pwd=9999"},
    {"h4": "NCSS", "name": "NCSS 2023", "baidu": "https://pan.baidu.com/s/1BEgas6jzqZAEUbchP5bi5w?pwd=9999"},
    {"h4": "Origin", "name": "Origin2022", "baidu": "https://pan.baidu.com/s/11hU9BJnVZUrwgilFhLi5KQ?pwd=9999"},
    {"h4": "Origin", "name": "Origin2024", "baidu": "https://pan.baidu.com/s/1Cok95LInUnjnb319vVqVeg?pwd=9999"},
    {"h4": "SAS", "name": "SAS.9.4", "baidu": "https://pan.baidu.com/s/16VwkZP_xX3QVY-b5G6UyqQ?pwd=9999"},
    {"h4": "SigmaPlot", "name": "SigmaPlot 15.0", "baidu": "https://pan.baidu.com/s/1ABYJd9rtX1iehm2n1_l69w?pwd=9999"},
    {"h4": "SQL Server", "name": "SQL Server2008", "baidu": "https://pan.baidu.com/s/10ThRwreKj85sbjm4FLnpSQ?pwd=9999"},
    {"h4": "SQL Server", "name": "SQL Server2019", "baidu": "https://pan.baidu.com/s/1W2614Wjd2bmVZ4l1TVtO5A?pwd=9999"},
    {"h4": "SQL Server", "name": "SQL Server2022", "baidu": "https://pan.baidu.com/s/1kAlMrpyI0BArzUV6T90Cxg?pwd=9999"},
    {"h4": "Tableau", "name": "Tableau2018", "baidu": "https://pan.baidu.com/s/1UfTn4ZkozZTobI69gHnPLA?pwd=9999"},
    {"h4": "Tableau", "name": "Tableau2021", "baidu": "https://pan.baidu.com/s/13nepF_Pm8UhgTcpYqTdRfw?pwd=9999"},
    {"h4": "Tableau", "name": "Tableau2023", "baidu": "https://pan.baidu.com/s/1VF2NwmDE_l2RDt-pkEtcAw?pwd=9999"},
    {"h4": "Tableau", "name": "Tableau2024", "baidu": "https://pan.baidu.com/s/16XfsAXxLXWBg4wD8nW9C7w?pwd=9999"},
    {"h4": "Tableau", "name": "Tableau2025", "baidu": "https://pan.baidu.com/s/16XfsAXxLXWBg4wD8nW9C7w?pwd=9999"},
    {"h4": "科学计算", "name": "Amos24", "baidu": "https://pan.baidu.com/s/12s3OUVjjnDPZ8w1FHVo8ww?pwd=9999"},
    {"h4": "科学计算", "name": "Amos26", "baidu": "https://pan.baidu.com/s/1dcKoeLnShgWw3OvjEMBFUQ?pwd=9999"},
    {"h4": "科学计算", "name": "Amos28", "baidu": "https://pan.baidu.com/s/1OKLyUVbRW66FbKC8OoVmrQ?pwd=9999"},
    {"h4": "Keil", "name": "Keil5 C51+MDK", "baidu": "https://share.feijipan.com/s/4LGuQ4yT?code=KEI2"},
    {"h4": "PaintTool SAI", "name": "SAI2 2024", "baidu": "https://share.feijipan.com/s/IUGuQXSt?code=SAI2"},
    {"h4": "DeepSeek 本地使用", "name": "DeepSeek 免费API 需要搭配CherryStudio使用", "baidu": "https://cloud.siliconflow.cn/i/i5kUdo5g"},
    {"h4": "DeepSeek 本地使用", "name": "CherryStudio 安装包", "baidu": "https://cherry-ai.com/"},
    {"h4": "ArcGIS", "name": "ArcGIS 10.2~10.8", "baidu": ""},
    {"h4": "ArcGIS", "name": "ArcGIS Pro", "baidu": ""},
    {"h4": "ArcGIS", "name": "ENVI 5.3 中英文自由切换", "baidu": ""},
    {"h4": "ArcGIS", "name": "ENVI 5.6 中英文自由切换", "baidu": ""},
    {"h4": "ArcGIS", "name": "SPSS ", "baidu": ""},
    {"h4": "MathType", "name": "MathType 7.8 最新 推荐", "baidu": ""},
    {"h4": "MathType", "name": "MathType 6.9 考古级版本", "baidu": ""},
    {"h4": "ENVI", "name": "ENVI 5.3 中英文自由切换", "baidu": ""},
    {"h4": "ENVI", "name": "ENVI 5.6 中英文自由切换", "baidu": ""},
    {"h4": "ENVI", "name": "ArcGIS 10.2~10.8", "baidu": ""},
    {"h4": "ENVI", "name": "ArcGIS Pro", "baidu": ""},
    {"h4": "PyCharm", "name": "PyCharm 2024", "baidu": ""},
    {"h4": "PyCharm", "name": "Navicat 17", "baidu": ""},
    {"h4": "PyCharm", "name": "Mysql", "baidu": ""},
    {"h4": "PyCharm", "name": "deepseek 本地", "baidu": ""},
    {"h4": "PyCharm", "name": "anaconda", "baidu": ""},
    {"h4": "PyCharm", "name": "jupyter", "baidu": ""},
    {"h4": "PyCharm", "name": "pytorch", "baidu": ""},
    {"h4": "PyCharm", "name": "tensorflow", "baidu": ""},
    {"h4": "PyCharm", "name": "keras", "baidu": ""},
    {"h4": "IDEA", "name": "IDEA 2024", "baidu": ""},
    {"h4": "IDEA", "name": "mysql", "baidu": ""},
    {"h4": "IDEA", "name": "navicat", "baidu": ""},
    {"h4": "IDEA", "name": "Java JDK", "baidu": ""},
    {"h4": "IDEA", "name": "Tomcat", "baidu": ""},
    {"h4": "IDEA", "name": "Deepseek", "baidu": ""},
    {"h4": "keyshot", "name": "keyshot 2025", "baidu": ""},
    {"h4": "keyshot", "name": "keyshot 2024", "baidu": ""},
    {"h4": "keyshot", "name": "keyshot 2023", "baidu": ""},
    {"h4": "keyshot", "name": "keyshot 10", "baidu": ""},
    {"h4": "keyshot", "name": "Rhino", "baidu": ""},
    {"h4": "rhinoceros", "name": "Rhino", "baidu": ""},
    {"h4": "rhinoceros", "name": "keyshot", "baidu": ""},
    {"h4": "sketchup", "name": "sketchup 2024", "baidu": ""},
    {"h4": "sketchup", "name": "sketchup 2022", "baidu": ""},
    {"h4": "sketchup", "name": "Enscape", "baidu": ""},
    {"h4": "sketchup", "name": "V-ray", "baidu": ""},
    {"h4": "sketchup", "name": "D5", "baidu": ""},
    {"h4": "sketchup", "name": "Lumion", "baidu": ""},
    {"h4": "sketchup", "name": "Revit", "baidu": ""},
    {"h4": "mysql", "name": "mysql 官方地址下载", "baidu": "https://dev.mysql.com/downloads/"},
    {"h4": "mysql", "name": "workbench", "baidu": ""},
    {"h4": "mysql", "name": "Navicat", "baidu": ""},
    {"h4": "mysql", "name": "sqlyog", "baidu": ""},
    {"h4": "mysql", "name": "DBeaver", "baidu": ""},
    {"h4": "mysql", "name": "DataGrip", "baidu": ""},
    {"h4": "mysql", "name": "phpstorm", "baidu": ""},
    {"h4": "mysql", "name": "pycharm", "baidu": ""},
    {"h4": "navicat premium", "name": "navicat 17 最新", "baidu": ""},
    {"h4": "MyEclipse", "name": "MyEclipse 10", "baidu": "https://pan.baidu.com/s/1Se0l_Ppcm6qPY3fw9xTrNQ?pwd=6789"},
    {"h4": "MyEclipse", "name": "MyEclipse 2019", "baidu": ""},
];

// 添加一个全局对象来存储预处理好的版本数据
const preProcessedVersions = {};

// 在页面加载时预处理所有版本信息
function preProcessAllVersions() {
    console.log('开始预处理所有软件版本数据...');

    // 获取所有软件项
    const gridItems = document.querySelectorAll('.grid-item');
    
    gridItems.forEach((item, index) => {
        const titleElement = item.querySelector('h4');
        if (!titleElement) return;
        
        const h4Text = titleElement.innerText.trim();
        console.log(`预处理 "${h4Text}" 的版本数据...`);
        
        // 这里不再调用 generateVersions
        // 直接从 JSON 数据中匹配版本
        if (typeof linksData !== 'undefined' && Array.isArray(linksData)) {
            const matchingItems = linksData.filter(linkItem => 
                linkItem.h4 && linkItem.h4.toLowerCase() === h4Text.toLowerCase()
            );
            
            if (matchingItems.length > 0) {
                const versions = matchingItems.map(item => item.name);
                console.log(`通过h4匹配找到版本:`, versions);
                // 预处理版本数据
                preProcessedVersions[h4Text] = versions;
            }
        }
    });
    
    console.log('所有软件版本预处理完成');
}

// 更新入口函数，在DOM加载后初始化功能
document.addEventListener('DOMContentLoaded', function() {
    console.log('linksData已加载，包含', linksData.length, '条记录');
    setupNavigation();
    setupSearch();
    setupPlaceholderIcons();
    setupScrollHandler();
    setupGridItemClickEvents();
});

// 顶部导航和侧边栏导航设置
function setupNavigation() {
    // 顶部导航栏按钮切换
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // 移除所有active类
            navLinks.forEach(item => item.classList.remove('active'));
            // 添加active类到当前点击的元素
            this.classList.add('active');
        });
    });

    // 左侧菜单项选择
    const categoryItems = document.querySelectorAll('.category-list li');
    
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除所有active类
            categoryItems.forEach(i => i.classList.remove('active'));
            // 添加active类到当前点击的元素
            this.classList.add('active');
        });
    });
}

// 设置搜索功能
function setupSearch() {
    const searchInput = document.querySelector('.search-box input');
    const searchBtn = document.querySelector('.search-btn');
    
    // 点击搜索按钮执行搜索
    searchBtn.addEventListener('click', performSearch);
    
    // 按回车键执行搜索
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// 定义搜索函数
function performSearch() {
    const searchInput = document.querySelector('.search-box input');
    const searchTerm = searchInput.value.toLowerCase().trim();
    const gridItems = document.querySelectorAll('.grid-item');
    
    if (!searchTerm) {
        // 清除所有高亮
        document.querySelectorAll('.search-highlight').forEach(item => {
            item.classList.remove('search-highlight');
        });
        return;
    }
    
    // 清除之前的高亮
    document.querySelectorAll('.search-highlight').forEach(item => {
        item.classList.remove('search-highlight');
    });
    
    let matchFound = false;
    let firstMatchItem = null;
    let matchedCategory = null;
    
    // 在所有网格项中搜索
    gridItems.forEach(item => {
        const title = item.querySelector('h4').innerText.toLowerCase();
        const description = item.querySelector('p').innerText.toLowerCase();
        
        // 恢复所有项的显示
        item.style.display = 'block';
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            // 获取所属分类
            const parentCategory = item.closest('.category-content');
            if (parentCategory && parentCategory.id) {
                matchedCategory = parentCategory.id;
                item.classList.add('search-highlight'); // 添加高亮样式
                
                if (!firstMatchItem) {
                    firstMatchItem = item; // 保存第一个匹配项用于滚动
                }
                
                matchFound = true;
            }
        }
    });
    
    if (matchFound && matchedCategory) {
        // 找到匹配项时，激活对应分类的sidebar项
        const categoryItems = document.querySelectorAll('.category-list li');
        categoryItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-category') === matchedCategory) {
                item.classList.add('active');
            }
        });
        
        // 显示对应分类内容
        const categoryContents = document.querySelectorAll('.category-content');
        categoryContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === matchedCategory) {
                content.classList.add('active');
            }
        });
        
        // 滚动到第一个匹配项
        if (firstMatchItem) {
            setTimeout(() => {
                firstMatchItem.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }, 100); // 短暂延迟确保分类切换完成
        }
    } else {
        // 未找到匹配项，显示提示
        alert('未找到匹配的软件，请尝试其他关键词');
    }
}

// 设置占位图标
function setupPlaceholderIcons() {
    // 动态设置Logo图片
    const logoPlaceholders = document.querySelectorAll('.app-icon img');
    logoPlaceholders.forEach(logo => {
        // 这里可以设置默认logo图片或生成随机颜色的占位图
        logo.src = logo.src || createPlaceholderIcon();
    });

    // 设置所有图标为随机颜色的占位图标
    document.querySelectorAll('img').forEach(img => {
        if (img.src.includes('placeholder-icon.png')) {
            img.src = createPlaceholderIcon();
        }
    });
}

// 创建占位图标函数
function createPlaceholderIcon() {
    return 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%3E%3Crect%20fill%3D%22%23' + Math.floor(Math.random()*16777215).toString(16) + '%22%20width%3D%2260%22%20height%3D%2260%22%2F%3E%3Ctext%20fill%3D%22%23fff%22%20font-family%3D%22Arial%22%20font-size%3D%2220%22%20x%3D%2230%22%20y%3D%2235%22%20text-anchor%3D%22middle%22%3ELOGO%3C%2Ftext%3E%3C%2Fsvg%3E';
}

// 滚动处理
function setupScrollHandler() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        header.style.boxShadow = window.scrollY > 10 ? '0 4px 6px rgba(0, 0, 0, 0.1)' : '0 2px 4px rgba(0, 0, 0, 0.1)';
    });
}

// 创建覆盖层的通用函数
function createOverlay(className = 'version-overlay') {
    const overlay = document.createElement('div');
    overlay.className = className;
    
    // 添加点击覆盖层关闭功能
    overlay.addEventListener('click', function(event) {
        // 只有当点击的是覆盖层本身，而不是其内容时才关闭
        if (event.target === overlay) {
            document.body.removeChild(overlay);
        }
    });
    
    return overlay;
}

// 创建关闭按钮的通用函数
function createCloseButton(className = 'close-version-page', parentOverlay) {
    const closeButton = document.createElement('button');
    closeButton.className = className;
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', function() {
        document.body.removeChild(parentOverlay);
    });
    return closeButton;
}

// 创建顶部按钮的通用函数
function createTopButtons() {
    const topButtons = document.createElement('div');
    topButtons.className = 'version-top-buttons';
    
    const leftButton = document.createElement('button');
    leftButton.className = 'version-button left-version-button';
    leftButton.innerText = '需要其他版本软件联系人工补充';
    leftButton.addEventListener('click', function() {
        showContactOverlay('其他版本需求');
    });
    
    const rightButton = document.createElement('button');
    rightButton.className = 'version-button right-version-button';
    rightButton.innerText = '人工远程协助安装服务指导1V1咨询';
    rightButton.addEventListener('click', function() {
        showContactOverlay('远程安装协助');
    });
    
    topButtons.appendChild(leftButton);
    topButtons.appendChild(rightButton);
    
    return topButtons;
}

// 创建下载按钮的通用函数
function createDownloadButtons(versionName) {
    const downloadButtons = document.createElement('div');
    downloadButtons.className = 'download-buttons';
    
    // 添加安装教程按钮
    const tutorialButton = document.createElement('a');
    tutorialButton.className = 'download-button tutorial-button';
    tutorialButton.innerText = '安装教程';
    tutorialButton.href = 'https://www.yuque.com/qianhou-xmwbx/cdyaeg';
    
    const baiduDownload = document.createElement('a');
    baiduDownload.className = 'download-button baidu-download';
    baiduDownload.innerText = '下载链接';
    baiduDownload.href = 'javascript:void(0)';
    baiduDownload.addEventListener('click', function() {
        getDownloadLink(versionName, 'baidu');
    });
    
    const directDownload = document.createElement('a');
    directDownload.className = 'download-button direct-download';
    directDownload.innerText = '不限速下载';
    directDownload.href = 'https://52052099.xyz/';
    
    downloadButtons.appendChild(tutorialButton);
    downloadButtons.appendChild(baiduDownload);
    downloadButtons.appendChild(directDownload);
    
    return downloadButtons;
}

// 创建底部声明的通用函数
function createBottomText() {
    const bottomText = document.createElement('div');
    bottomText.className = 'version-bottom-text';
    bottomText.innerText = '下载本站资源默认已经阅读并且接受网站底部的免责声明';
    return bottomText;
}

// 根据索引获取不同颜色
function getColorByIndex(index) {
    const colors = ['#3498db', '#e67e22', '#9b59b6', '#2ecc71', '#e74c3c', '#1abc9c', '#f39c12', '#8e44ad'];
    return colors[index % colors.length];
}

// 定义 removeExistingOverlays 函数
function removeExistingOverlays(selector) {
    const existingOverlays = document.querySelectorAll(selector);
    existingOverlays.forEach(overlay => {
        try {
            if (overlay && overlay.parentNode) {
                overlay.parentNode.removeChild(overlay);
            }
        } catch (error) {
            console.error(`移除覆盖层失败 (${selector}):`, error);
        }
    });
}

// 为所有软件添加点击事件
function setupGridItemClickEvents() {
    console.log('添加grid-item点击事件');
    console.log('当前linksData条目数:', linksData.length);
    
    if (linksData.length > 0) {
        // 打印所有h4值进行调试
        const allH4Values = linksData
            .map(item => item.h4)
            .filter((value, index, self) => value && self.indexOf(value) === index);
        console.log('JSON中的所有h4值:', allH4Values);
    }
    
    document.querySelectorAll('.grid-item').forEach(item => {
        const h4Text = item.querySelector('h4').innerText.trim();
        console.log('网页中的h4值:', h4Text);
        
        item.addEventListener('click', function() {
            console.log('点击软件:', h4Text);
            
            // 移除可能已存在的覆盖层
            removeExistingOverlays('.version-overlay');
            
            // 仅根据h4文本匹配JSON中的版本（不区分大小写）
            if (linksData.length > 0) {
                const matchingItems = linksData.filter(linkItem => 
                    linkItem.h4 && linkItem.h4.toLowerCase() === h4Text.toLowerCase()
                );
                
                if (matchingItems.length > 0) {
                    const versions = matchingItems.map(item => item.name);
                    console.log('通过h4匹配找到版本:', versions);
                    openCustomVersionPage(h4Text, versions);
                    return;
                } else {
                    console.log(`未找到匹配的版本项，h4: ${h4Text}`);
                    console.log('可能的h4值:', linksData.map(item => item.h4).slice(0, 10));
                }
            } else {
                console.error('linksData 为空数组');
            }
            
            // 如果没有匹配版本，显示无版本信息
            console.log('未找到匹配版本，显示无版本信息');
            showNoVersionOverlay(h4Text);
        });
    });
}

// 自定义版本页面函数
function openCustomVersionPage(softwareName, versionsList) {
    console.log('打开自定义版本页面:', softwareName, '版本列表:', versionsList);
    
    // 验证 versionsList 是否为数组
    if (!Array.isArray(versionsList)) {
        console.error('版本列表不是数组:', versionsList);
        showNoVersionOverlay(softwareName); // 显示无版本信息
        return;
    }
    
    // 创建覆盖层和容器
    const overlay = createOverlay();
    const container = document.createElement('div');
    container.className = 'version-container';
    
    // 添加组件
    const closeButton = createCloseButton('close-version-page', overlay);
    const topButtons = createTopButtons();
    const versionList = document.createElement('div');
    versionList.className = 'version-list';
    
    // 使用传入的版本列表 - 不去重，保持原样
    versionsList.forEach((versionName, index) => {
        const versionItem = document.createElement('div');
        versionItem.className = 'version-item';
        
        const versionNameDiv = document.createElement('div');
        versionNameDiv.className = 'version-name';
        versionNameDiv.innerHTML = `<span class="version-dot" style="background-color: ${getColorByIndex(index)};"></span>${versionName}`;
        
        const downloadButtons = createDownloadButtons(versionName);
        
        versionItem.appendChild(versionNameDiv);
        versionItem.appendChild(downloadButtons);
        
        versionList.appendChild(versionItem);
    });
    
    const bottomText = createBottomText();
    
    // 组装各部分
    container.appendChild(closeButton);
    container.appendChild(topButtons);
    container.appendChild(versionList);
    container.appendChild(bottomText);
    
    overlay.appendChild(container);
    
    console.log('添加版本选择覆盖层到页面');
    // 添加到body
    document.body.appendChild(overlay);
}

// 获取下载链接
function getDownloadLink(softwareName, linkType) {
    console.log(`获取 ${softwareName} 的 ${linkType} 下载链接`);
    
    // 从linksData中查找
            const foundSoftware = linksData.find(item => 
        item.name === softwareName
            );
            
            if (foundSoftware) {
                // 根据类型获取下载链接
                const link = linkType === 'baidu' ? foundSoftware.baidu : foundSoftware.thunder;
                
                if (link) {
                    // 打开新窗口访问链接
                    window.open(link, '_blank');
                    return;
                }
            }
            
            // 如果没有找到匹配的软件或链接，显示错误提示
            console.log(`未找到 ${softwareName} 的 ${linkType} 下载链接`);
            showLinkNotFoundOverlay();
}

// 显示链接未找到的提示覆盖层
function showLinkNotFoundOverlay() {
    // 移除已存在的错误覆盖层
    removeExistingOverlays('.error-overlay');
    
    // 创建覆盖层
    const errorOverlay = document.createElement('div');
    errorOverlay.className = 'error-overlay';
    
    // 创建内容容器
    const errorContainer = document.createElement('div');
    errorContainer.className = 'error-container';
    
    // 添加标题
    const errorTitle = document.createElement('h3');
    errorTitle.innerText = '链接暂未上传';
    
    // 添加描述
    const errorDesc = document.createElement('p');
    errorDesc.innerText = '请联系人工客服服务获取下载链接';
    
    //添加二维码图片
    const qrCode = document.createElement('img');
    qrCode.src = '/img/gzh.png'; // 替换为实际的二维码图片
    qrCode.alt = '客服二维码';
    qrCode.className = 'qr-code';
    // 添加关闭按钮
    const closeButton = createCloseButton('close-error-overlay', errorOverlay);
    
    // 组装各部分
    errorContainer.appendChild(closeButton);
    errorContainer.appendChild(errorTitle);
    errorContainer.appendChild(errorDesc);
    errorContainer.appendChild(qrCode);
    
    errorOverlay.appendChild(errorContainer);
    
    // 添加点击覆盖层关闭功能
    errorOverlay.addEventListener('click', function(event) {
        if (event.target === errorOverlay) {
            document.body.removeChild(errorOverlay);
        }
    });
    
    // 添加到 body
    document.body.appendChild(errorOverlay);
}

// 显示无版本信息的覆盖层
function showNoVersionOverlay(softwareName) {
    // 移除已存在的覆盖层
    removeExistingOverlays('.error-overlay');
    
    // 创建覆盖层
    const errorOverlay = document.createElement('div');
    errorOverlay.className = 'error-overlay';
    
    // 创建内容容器
    const errorContainer = document.createElement('div');
    errorContainer.className = 'error-container';
    
    // 添加标题
    const errorTitle = document.createElement('h3');
    errorTitle.innerText = '软件可以安装';
    
    // 添加描述
    const errorDesc = document.createElement('p');
    errorDesc.innerText = `请联系人工咨询自己想要的版本`;
    
    // 添加二维码图片
    const qrCode = document.createElement('img');
    qrCode.src = '/img/gzh.png';
    qrCode.alt = '客服二维码';
    qrCode.className = 'qr-code';
    
    // 添加关闭按钮
    const closeButton = createCloseButton('close-error-overlay', errorOverlay);
    
    // 组装各部分
    errorContainer.appendChild(closeButton);
    errorContainer.appendChild(errorTitle);
    errorContainer.appendChild(errorDesc);
    errorContainer.appendChild(qrCode);
    
    errorOverlay.appendChild(errorContainer);
    
    // 添加点击覆盖层关闭功能
    errorOverlay.addEventListener('click', function(event) {
        if (event.target === errorOverlay) {
            document.body.removeChild(errorOverlay);
        }
    });
    
    // 添加到 body
    document.body.appendChild(errorOverlay);
}

// // 添加显示联系方式的函数
// function showContactOverlay(requestType) {
//     // 移除已存在的联系覆盖层
//     removeExistingOverlays('.contact-overlay');
    
//     // 创建覆盖层
//     const contactOverlay = document.createElement('div');
//     contactOverlay.className = 'error-overlay contact-overlay';
    
//     // 创建内容容器
//     const contactContainer = document.createElement('div');
//     contactContainer.className = 'error-container';
    
//     // 添加标题
//     const contactTitle = document.createElement('h3');
//     contactTitle.innerText = `联系客服 - ${requestType}`;
    
//     // 添加描述
//     const contactDesc = document.createElement('p');
//     contactDesc.innerText = '请扫描下方二维码联系客服获取帮助';
    
//     // 添加二维码图片
//     const qrCode = document.createElement('img');
//     qrCode.src = 'https://vedio.softgj.com/Picture/qrcode.jpg'; // 替换为实际的二维码图片
//     qrCode.alt = '客服二维码';
//     qrCode.className = 'qr-code';
    
//     // 添加关闭按钮
//     const closeButton = createCloseButton('close-error-overlay', contactOverlay);
    
//     // 组装各部分
//     contactContainer.appendChild(closeButton);
//     contactContainer.appendChild(contactTitle);
//     contactContainer.appendChild(contactDesc);
//     contactContainer.appendChild(qrCode);
    
//     contactOverlay.appendChild(contactContainer);
    
//     // 添加点击覆盖层关闭功能
//     contactOverlay.addEventListener('click', function(event) {
//         if (event.target === contactOverlay) {
//             document.body.removeChild(contactOverlay);
//         }
//     });
    
//     // 添加到 body
//     document.body.appendChild(contactOverlay);
// }
