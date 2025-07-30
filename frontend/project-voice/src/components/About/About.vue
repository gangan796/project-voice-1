<script lang="ts" setup>
</script>
<template>
<div class="container">
        <div class="section">
            <h2 class="section-title-bold">团队介绍</h2>
            <div class="team-group">
                <div class="team-member">
                    <div class="team-member-info">
                        <h3 class="team-member-name">姚登峰</h3>
                        <p class="team-member-role">项目负责人</p>
                        <p class="team-member-bio">北京联合大学/清华大学教授</p>
                    </div>
                    <div class="team-member-photo">
                        <img src="@/assets/imges/姚登峰.jpg" alt="姚登峰">
                    </div>
                </div>

                <div class="team-member">
                    <div class="team-member-info">
                        <h3 class="team-member-name">孟子文</h3>
                        <p class="team-member-role">项目经理</p>
                        <p class="team-member-bio">北京联合大学软件工程专业2024级硕士研究生</p>
                    </div>
                    <div class="team-member-photo">
                        <img src="@/assets/imges/孟子文.jpg" alt="孟子文">
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <h2 class="section-title">提示词工程组</h2>
            <div class="team-group">
                <div class="team-member">
                    <div class="team-member-info">
                        <h3 class="team-member-name">孟子文</h3>
                        <p class="team-member-bio">北京联合大学软件工程专业2024级硕士研究生</p>
                    </div>
                    <div class="team-member-photo">
                        <img src="@/assets/imges/孟子文.jpg" alt="孟子文">
                    </div>
                </div>

                <div class="team-member">
                    <div class="team-member-info">
                        <h3 class="team-member-name">舒玥铭</h3>
                        <p class="team-member-bio">北京联合大学软件工程专业2024级硕士研究生</p>
                    </div>
                    <div class="team-member-photo">
                        <img src="@/assets/imges/舒玥铭.jpg" alt="舒玥铭">
                    </div>
                </div>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">UI设计组</h2>
            <div class="team-group">
                <div class="team-member">
                    <div class="team-member-info">
                        <h3 class="team-member-name">马乐原</h3>
                        <p class="team-member-bio">北京联合大学软件工程专业2024级硕士研究生</p>
                    </div>
                    <div class="team-member-photo">
                        <img src="@/assets/imges/马乐原.jpg" alt="马乐原">
                    </div>
                </div>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">技术开发组</h2>
            <div class="team-group">
                <div class="team-member">
                    <div class="team-member-info">
                        <h3 class="team-member-name">张炳毅</h3>
                        <p class="team-member-bio">北京联合大学计算机科学与技术专业2022级本科生</p>
                    </div>
                    <div class="team-member-photo">
                        <img src="@/assets/imges/张炳毅.jpg" alt="张炳毅">
                    </div>
                </div>

                <div class="team-member">
                    <div class="team-member-info">
                        <h3 class="team-member-name">杨兆晨</h3>
                        <p class="team-member-bio">北京联合大学计算机科学与技术专业2022级本科生</p>
                    </div>
                    <div class="team-member-photo">
                        <img src="@/assets/imges/杨兆晨.jpg" alt="杨兆晨">
                    </div>
                </div>
            </div>
            <div class="team-member">
            <div class="team-member-info">
                <h3 class="team-member-name">宋维文</h3>
                <p class="team-member-bio">北京联合大学2014届校友</p>
            </div>
            <div class="team-member-photo">
                <img src="@/assets/imges/宋维文.jpg" alt="宋维文">
            </div>
        </div>
        </div>
       

        <div class="section">
            <h2 class="section-title">域名及服务器赞助</h2>
            <div class="team-group">
                <div class="team-member">
                    <div class="team-member-info">
                        <h3 class="team-member-name">王忠泽</h3>
                        <p class="team-member-bio">语惠科技(南京)有限公司董事长、北京联合大学2022届校友</p>
                    </div>
                   
                </div>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">网站空间技术支持</h2>
            <div class="team-group">
                <div class="team-member">
                    <div class="team-member-info">
                        <h3 class="team-member-name">姚吉安</h3>
                        <p class="team-member-bio">语惠科技(南京)有限公司CTO</p>
                    </div>
                    
                </div>
            </div>
            <h2 class="section-title">联系方式</h2>
        <p class="team-member-bio-text">如有问题请与姚登峰( tjtdengfeng@buu.edu.cn )、孟子文( ziwengM@buu.edu.cn)联系。</p>
        </div>
        
    </div>
</template>
<style scoped>
        .header {
            background-color: #2c7d8e;
            color: white;
            padding: 15px 0;
            text-align: center;
        }

        .nav {
            display: flex;
            justify-content: center;
            gap: 20px;
            padding: 10px;
            background-color: #2c7d8e;
        }

        .nav a {
            color: white;
            text-decoration: none;
            font-size: 14px;
        }

        .container {
            width: 100%;
            margin: 20px auto;
            padding: 0 20px;
            height:90vh;
            overflow-y: auto;
            justify-content: center;
            margin-left:8rem;
           
        }

        .section {
            margin-bottom: 40px;
            padding: 0 10rem;
        }

        .section-title-bold {
             font-size: 3rem;
            font-weight: bold;
            color: #2c7d8e;
            margin-bottom:4rem;
            margin-top: 2rem;
            padding-left: 10px;
        }
        .section-title {
            font-size: 2rem;
            color: #2c7d8e;
            margin-bottom: 20px;
        
            padding-left: 10px;
        }

        .team-group {
            display: flex;
            flex-wrap: wrap;
            gap: 5rem;
        }

        .team-member {
            flex: 0 0 40rem; 
            max-width: 40rem;
            display: flex;
            align-items: center;
            background: #f9f9f9;
            padding: 15px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
        }

        .team-member-info {
            flex: 1;
        }

        .team-member-name {
            font-size: 18px;
            color: #2c7d8e;
            margin-bottom: 5px;
        }

        .team-member-role {
            font-size: 14px;
            color: #666;
            margin-bottom: 5px;
        }

        .team-member-bio {
            font-size: 12px;
            color: #999;
          
        }
        .team-member-bio-text {
            font-size: 12px;
            color: #999;
            padding-bottom: 2rem;
        }

        .team-member-photo {
            width: 8rem;
            height: 8rem;
            background-color: #ddd;
            margin-left: 15px;
            border-radius: 4px;
        }

        .team-member-photo img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
</style>