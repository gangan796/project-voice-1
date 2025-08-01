#!/bin/bash

# 函数级注释：启动前端预览服务器
start_preview() {
    echo "🚀 启动前端预览服务器..."
    
    # 获取脚本所在目录
    SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
    PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
    
    # 检查目录是否存在
    if [[ ! -d "$PROJECT_ROOT/frontend/project-voice" ]]; then
        echo "❌ 错误：frontend/project-voice 目录不存在"
        exit 1
    fi
    
    # 检查是否已构建
    if [[ ! -d "$PROJECT_ROOT/frontend/project-voice/dist" ]]; then
        echo "⚠️  警告：未找到构建文件，请先运行 ./build.sh"
        read -p "是否现在构建？(y/n): " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            cd "$PROJECT_ROOT" || exit 1
            ./sh/build.sh
        else
            echo "❌ 取消操作"
            exit 1
        fi
    fi
    
    # 检查npm
    if ! command -v npm &> /dev/null; then
        echo "❌ 错误：npm 未安装"
        exit 1
    fi
    
    # 进入项目目录
    cd "$PROJECT_ROOT/frontend/project-voice" || exit 1
    
    echo "🌐 启动预览服务器..."
    echo "📍 访问地址: http://localhost:4173"
    echo "🛑 按 Ctrl+C 停止服务器"
    
    # 启动预览服务器
    npm run preview
}

# 主执行
start_preview
