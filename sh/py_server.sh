#!/bin/bash

# 函数级注释：启动Python后端服务器
start_python_server() {
    echo "🐍 启动Python后端服务器..."
    
    # 获取脚本所在目录
    SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
    PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
    
    # 检查目录是否存在
    if [[ ! -d "$PROJECT_ROOT/backend" ]]; then
        echo "❌ 错误：backend 目录不存在"
        exit 1
    fi
    
    # 检查Python
    if ! command -v python3 &> /dev/null; then
        echo "❌ 错误：Python3 未安装"
        exit 1
    fi
    
    cd "$PROJECT_ROOT/backend" || exit 1
    
    # 检查虚拟环境
    if [[ ! -d "venv" ]]; then
        echo "📦 创建Python虚拟环境..."
        python3 -m venv venv
    fi
    
    # 检查requirements.txt
    if [[ ! -f "requirements.txt" ]]; then
        echo "❌ 错误：requirements.txt 不存在"
        exit 1
    fi
    
    # 激活虚拟环境（macOS/Linux路径）
    echo "🔄 激活Python虚拟环境..."
    source venv/bin/activate
    
    # 检查依赖是否已安装
    if [[ ! -f "venv/bin/pip" ]]; then
        echo "📥 安装Python依赖..."
        pip install -r requirements.txt
    else
        echo "✅ Python依赖已安装"
    fi
    
    # 检查middleware.py是否存在
    if [[ ! -f "middleware.py" ]]; then
        echo "❌ 错误：middleware.py 不存在"
        exit 1
    fi
    
    echo "🌐 启动后端服务器..."
    echo "📍 默认地址: http://localhost:5000 (或其他配置端口)"
    echo "🛑 按 Ctrl+C 停止服务器"
    
    # 启动服务器
    python middleware.py
}

# 主执行
start_python_server