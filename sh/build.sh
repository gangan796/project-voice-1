#!/bin/bash

# 函数级注释：构建前端项目
build_frontend() {
    echo "🚀 开始构建前端项目..."
    
    # 获取脚本所在目录
    SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
    PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
    
    # 检查目录是否存在
    if [[ ! -d "$PROJECT_ROOT/frontend/project-voice" ]]; then
        echo "❌ 错误：frontend/project-voice 目录不存在"
        exit 1
    fi
    
    # 进入项目目录
    cd "$PROJECT_ROOT/frontend/project-voice" || exit 1
    
    # 检查npm是否安装
    if ! command -v npm &> /dev/null; then
        echo "❌ 错误：npm 未安装"
        exit 1
    fi
    
    # 执行构建
    echo "📦 安装依赖..."
    npm install
    
    echo "🔨 构建项目..."
    npm run build
    
    if [[ $? -eq 0 ]]; then
        echo "✅ 前端构建完成"
    else
        echo "❌ 前端构建失败"
        exit 1
    fi
}

# 主执行
build_frontend
