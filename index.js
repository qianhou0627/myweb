// 添加自定义版本下载链接映射 - 放在文件顶部全局作用域


document.addEventListener('DOMContentLoaded', function() {
    // 延迟一点时间再执行，确保DOM完全解析
    setTimeout(function() {
        updateGridItemVersions();
    }, 100);
    
    // 顶部导航栏按钮切换
    setupNavigation();
    
    // 设置搜索功能
    setupSearch();

    // 设置占位图标
    setupPlaceholderIcons();

    // 监听滚动事件，确保顶部导航栏始终固定
    setupScrollHandler();
    
    // 不再在这里直接调用 setupGridItemClickEvents
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

// 为所有软件添加点击事件 - 完全重构执行逻辑
function setupGridItemClickEvents() {
    console.log('DOM 加载完成，添加 grid-item 点击事件');
    
    document.querySelectorAll('.grid-item').forEach((item, index) => {
        const title = item.querySelector('h4')?.innerText || '未知软件';
        
        item.addEventListener('click', function() {
            // 获取软件名称
            const softwareName = this.querySelector('h4').innerText;
            console.log('点击软件:', softwareName);
            
            // 移除可能已存在的覆盖层
            removeExistingOverlays('.version-overlay');
            
            // 生成版本并显示版本页面
            processVersions(this, softwareName);
        });
    });
}

// 新的版本处理逻辑
function processVersions(gridItem, softwareName) {
    // 步骤1：先获取默认版本作为基础
    console.log('步骤1: 使用默认模板生成基础版本');
    let versions = generateVersions(softwareName);
    let versionSource = "default";
    
    // 创建覆盖层和基础容器 - 先展示内容，后续再更新
    const overlay = createOverlay();
    const container = document.createElement('div');
    container.className = 'version-container';
    
    // 更新版本显示函数
    function updateVersionDisplay(newVersions, source) {
        console.log(`从${source}更新版本显示:`, newVersions);
        versions = newVersions;
        versionSource = source;
        
        // 清除旧内容
        container.innerHTML = '';
        
        // 添加组件
        const closeButton = createCloseButton('close-version-page', overlay);
        const topButtons = createTopButtons();
        const versionList = document.createElement('div');
        versionList.className = 'version-list';
        
        // 显示版本列表
        versions.forEach((version, index) => {
            const versionItem = document.createElement('div');
            versionItem.className = 'version-item';
            
            const versionName = document.createElement('div');
            versionName.className = 'version-name';
            
            // 判断版本是否为字符串或对象
            const versionText = typeof version === 'string' ? version : version.name;
            versionName.innerHTML = `<span class="version-dot" style="background-color: ${getColorByIndex(index)};"></span>${versionText}`;
            
            const downloadButtons = createDownloadButtons(versionText);
            
            versionItem.appendChild(versionName);
            versionItem.appendChild(downloadButtons);
            
            versionList.appendChild(versionItem);
        });
        
        const bottomText = createBottomText();
        
        // 组装各部分
        container.appendChild(closeButton);
        container.appendChild(topButtons);
        container.appendChild(versionList);
        container.appendChild(bottomText);
    }
    
    // 初始显示默认版本
    updateVersionDisplay(versions, "默认模板");
    overlay.appendChild(container);
    document.body.appendChild(overlay);
    
    // 步骤2：尝试从JSON文件加载数据
    console.log('步骤2: 尝试从JSON文件加载数据');
    tryLoadVersionsFromJSON(softwareName, (jsonVersions) => {
        if (jsonVersions && jsonVersions.length > 0) {
            console.log('JSON数据加载成功，更新版本显示');
            updateVersionDisplay(jsonVersions, "JSON数据");
            
            // 步骤3：检查HTML元素上的data-versions属性
            checkDataVersionsAttribute();
        } else {
            console.log('JSON数据未找到，直接检查data-versions属性');
            // 没有JSON数据时，直接进行步骤3
            checkDataVersionsAttribute();
        }
    });
    
    // 步骤3：检查HTML元素上的data-versions属性
    function checkDataVersionsAttribute() {
        console.log('步骤3: 检查data-versions属性');
        if (gridItem.hasAttribute('data-versions') && gridItem.getAttribute('data-versions')) {
            try {
                const versionsAttr = gridItem.getAttribute('data-versions');
                console.log('发现data-versions属性:', versionsAttr);
                const customVersions = JSON.parse(versionsAttr);
                
                if (Array.isArray(customVersions) && customVersions.length > 0) {
                    console.log('data-versions解析成功，使用自定义版本列表');
                    updateVersionDisplay(customVersions, "HTML属性");
                    
                    // 打印最终使用的版本来源
                    console.log('最终版本来源: HTML中的data-versions属性');
                } else {
                    console.log('data-versions属性为空数组，保持当前版本不变');
                }
            } catch (error) {
                console.error('解析data-versions属性失败:', error);
                // 解析失败时保持当前版本不变
                console.log('最终版本来源:', versionSource);
            }
        } else {
            console.log('未找到data-versions属性，保持当前版本不变');
            console.log('最终版本来源:', versionSource);
        }
    }
}

// 尝试从JSON文件加载版本数据
function tryLoadVersionsFromJSON(softwareName, callback) {
    // 如果预定义的linksData可用，直接使用而不发送网络请求
    if (typeof linksData !== 'undefined' && Array.isArray(linksData)) {
        console.log('使用预定义的linksData而不发送网络请求');
        const matchingVersions = linksData
            .filter(item => item.name.toLowerCase().includes(softwareName.toLowerCase()))
            .map(item => item.name);
            
        if (matchingVersions.length > 0) {
            console.log('在预定义linksData中找到匹配:', matchingVersions);
            callback(matchingVersions);
            return;
        }
    }
    
    // 如果没有预定义数据，尝试网络请求
    console.log('没有预定义数据，尝试网络请求获取JSON');
    
    // 尝试不同的可能路径
    const repoPath = location.pathname.split('/')[1] || '';
    const jsonPaths = [
        './src/links.json',
        '/src/links.json',
        `/${repoPath}/src/links.json`,
        'src/links.json'
    ];
    
    let pathIndex = 0;
    tryNextPath();
    
    function tryNextPath() {
        if (pathIndex >= jsonPaths.length) {
            // 所有路径都尝试过了，没有找到有效数据
            callback(null);
            return;
        }
        
        const currentPath = jsonPaths[pathIndex++];
        console.log(`尝试从 ${currentPath} 加载数据...`);
        
        fetch(currentPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`获取 ${currentPath} 失败，状态码 ${response.status}`);
                }
                return response.json();
            })
            .then(jsonData => {
                if (!Array.isArray(jsonData)) {
                    throw new Error('加载的数据不是有效数组');
                }
                
                // 在JSON数据中匹配版本
                const matchingVersions = jsonData
                    .filter(item => item.name && item.name.toLowerCase().includes(softwareName.toLowerCase()))
                    .map(item => item.name);
                
                callback(matchingVersions);
            })
            .catch(error => {
                console.warn(`从 ${currentPath} 加载失败:`, error);
                // 尝试下一个路径
                tryNextPath();
            });
    }
}

// 修改下载链接获取函数
function getDownloadLink(softwareName, linkType) {
    console.log(`获取 ${softwareName} 的 ${linkType} 下载链接`);
    
    // 首先检查预定义的linksData
    if (typeof linksData !== 'undefined' && Array.isArray(linksData)) {
        const normalizedSoftwareName = softwareName.toLowerCase().trim();
        const foundSoftware = linksData.find(item => 
            item.name.toLowerCase().trim() === normalizedSoftwareName
        );
        
        if (foundSoftware) {
            const link = linkType === 'baidu' ? foundSoftware.baidu : foundSoftware.thunder;
            if (link) {
                window.open(link, '_blank');
                return;
            }
        }
    }
    
    // 如果预定义数据中没有，显示"链接未找到"提示
    console.log(`未找到 ${softwareName} 的 ${linkType} 下载链接`);
    showLinkNotFoundOverlay();
}

// 更新updateGridItemVersions函数，使其只设置点击事件
function updateGridItemVersions() {
    console.log('设置grid-item点击事件...');
    // 直接设置点击事件，不再尝试预加载版本信息
    setupGridItemClickEvents();
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
    baiduDownload.innerText = '百度网盘下载链接';
    baiduDownload.href = 'javascript:void(0)';
    baiduDownload.addEventListener('click', function() {
        getDownloadLink(versionName, 'baidu');
    });
    
    const thunderDownload = document.createElement('a');
    thunderDownload.className = 'download-button thunder-download';
    thunderDownload.innerText = '迅雷下载链接';
    thunderDownload.href = 'javascript:void(0)';
    thunderDownload.addEventListener('click', function() {
        getDownloadLink(versionName, 'thunder');
    });
    
    const directDownload = document.createElement('a');
    directDownload.className = 'download-button direct-download';
    directDownload.innerText = '不限速下载';
    directDownload.href = 'https://52052099.xyz/';
    
    downloadButtons.appendChild(tutorialButton);
    downloadButtons.appendChild(baiduDownload);
    // downloadButtons.appendChild(thunderDownload);
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

// 移除已存在覆盖层的通用函数
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

// 根据索引获取不同颜色
function getColorByIndex(index) {
    const colors = ['#3498db', '#e67e22', '#9b59b6', '#2ecc71', '#e74c3c', '#1abc9c', '#f39c12', '#8e44ad'];
    return colors[index % colors.length];
}

// 软件版本下载页面相关函数
function openVersionPage(softwareName) {
    // 创建覆盖层和容器
    const overlay = createOverlay();
    const container = document.createElement('div');
    container.className = 'version-container';
    
    // 添加组件
    const closeButton = createCloseButton('close-version-page', overlay);
    const topButtons = createTopButtons();
    const versionList = document.createElement('div');
    versionList.className = 'version-list';
    
    // 这里根据软件名称生成一些示例版本
    const versions = generateVersions(softwareName);
    
    versions.forEach(version => {
        const versionItem = document.createElement('div');
        versionItem.className = 'version-item';
        
        const versionName = document.createElement('div');
        versionName.className = 'version-name';
        versionName.innerHTML = `<span class="version-dot" style="background-color: ${version.color};"></span>${version.name}`;
        
        const downloadButtons = createDownloadButtons(version.name);
        
        versionItem.appendChild(versionName);
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
    
    // 添加到body
    document.body.appendChild(overlay);
}

// 生成版本数据示例函数
function generateVersions(softwareName) {
    // 根据软件名生成不同数量和内容的版本
    const colors = ['#3498db', '#e67e22', '#9b59b6', '#2ecc71'];
    const years = ['2025', '2024', '2023', '2022', '2021'];
    
    // 根据软件名的长度决定版本数量，至少1个，最多5个
    const versionCount = Math.max(1, Math.min(5, softwareName.length % 5 + 1));
    
    const versions = [];
    for (let i = 0; i < versionCount; i++) {
        versions.push({
            name: `${softwareName} ${years[i]}`,
            color: colors[i % colors.length]
        });
    }
    
    return versions;
}

// 自定义版本页面函数
function openCustomVersionPage(softwareName, versionsList) {
    console.log('打开自定义版本页面:', softwareName, '版本列表:', versionsList);
    
    // 验证 versionsList 是否为数组
    if (!Array.isArray(versionsList)) {
        console.error('版本列表不是数组:', versionsList);
        openVersionPage(softwareName); // 回退到默认版本页面
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
    
    // 使用传入的版本列表
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
    
    // 添加二维码图片
    const qrCode = document.createElement('img');
    qrCode.src = 'https://vedio.softgj.com/Picture/qrcode.jpg'; // 替换为实际的二维码图片
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

// 添加显示联系方式的函数
function showContactOverlay(requestType) {
    // 移除已存在的联系覆盖层
    removeExistingOverlays('.contact-overlay');
    
    // 创建覆盖层
    const contactOverlay = document.createElement('div');
    contactOverlay.className = 'error-overlay contact-overlay';
    
    // 创建内容容器
    const contactContainer = document.createElement('div');
    contactContainer.className = 'error-container';
    
    // 添加标题
    const contactTitle = document.createElement('h3');
    contactTitle.innerText = `联系客服 - ${requestType}`;
    
    // 添加描述
    const contactDesc = document.createElement('p');
    contactDesc.innerText = '请扫描下方二维码联系客服获取帮助';
    
    // 添加二维码图片
    const qrCode = document.createElement('img');
    qrCode.src = 'https://vedio.softgj.com/Picture/qrcode.jpg'; // 替换为实际的二维码图片
    qrCode.alt = '客服二维码';
    qrCode.className = 'qr-code';
    
    // 添加关闭按钮
    const closeButton = createCloseButton('close-error-overlay', contactOverlay);
    
    // 组装各部分
    contactContainer.appendChild(closeButton);
    contactContainer.appendChild(contactTitle);
    contactContainer.appendChild(contactDesc);
    contactContainer.appendChild(qrCode);
    
    contactOverlay.appendChild(contactContainer);
    
    // 添加点击覆盖层关闭功能
    contactOverlay.addEventListener('click', function(event) {
        if (event.target === contactOverlay) {
            document.body.removeChild(contactOverlay);
        }
    });
    
    // 添加到 body里面
    document.body.appendChild(contactOverlay);
}
