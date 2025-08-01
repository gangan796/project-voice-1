#!/bin/bash

# 函数级注释：安装并启动完整服务器环境
install_full_server() {
    echo "🚀 开始安装完整服务器环境..."
    
    # 获取脚本所在目录
    SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
    PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
    
    # 检查必要目录
    if [[ ! -d "$PROJECT_ROOT/frontend/project-voice" ]]; then
        echo "❌ 错误：frontend/project-voice 目录不存在"
        exit 1
    fi
    
    if [[ ! -d "$PROJECT_ROOT/backend" ]]; then
        echo "❌ 错误：backend 目录不存在"
        exit 1
    fi
    
    # 检查npm
    if ! command -v npm &> /dev/null; then
        echo "❌ 错误：npm 未安装"
        exit 1
    fi
    
    # 前端部分
    echo "📦 处理前端项目..."
    cd "$PROJECT_ROOT/frontend/project-voice" || exit 1
    
    echo "📥 安装前端依赖..."
    npm install
    
    echo "🔨 构建前端..."
    npm run build
    
    if [[ $? -ne 0 ]]; then
        echo "❌ 前端构建失败"
        exit 1
    fi
    
    echo "👀 启动前端预览..."
    npm run preview &
    FRONTEND_PID=$!
    
    # 后端部分
    echo "🐍 处理后端服务器..."
    cd "$PROJECT_ROOT/backend" || exit 1
    
    # 检查Python
    if ! command -v python3 &> /dev/null; then
        echo "❌ 错误：Python3 未安装"
        kill $FRONTEND_PID 2>/dev/null
        exit 1
    fi
    
    # 检查虚拟环境
    if [[ ! -d "venv" ]]; then
        echo "📦 创建Python虚拟环境..."
        python3 -m venv venv
    fi
    
    echo "🔄 激活虚拟环境并安装依赖..."
    source venv/bin/activate
    pip install -r requirements.txt
    
    echo "✅ 完整服务器环境安装完成"
    echo "🌐 前端预览运行在: http://localhost:4173"
    echo "🐍 后端服务器准备就绪，运行 ./py_server.sh 启动"
    
    # 清理后台进程
    trap "kill $FRONTEND_PID 2>/dev/null" EXIT
}

# 主执行
install_full_server