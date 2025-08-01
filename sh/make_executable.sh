#!/bin/bash

# 函数级注释：使所有shell脚本可执行
make_scripts_executable() {
    echo "🔧 设置脚本执行权限..."
    
    # 获取当前目录
    SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
    
    # 为所有.sh文件添加执行权限
    chmod +x "$SCRIPT_DIR"/*.sh
    
    if [[ $? -eq 0 ]]; then
        echo "✅ 所有脚本已设置为可执行"
        echo "📋 现在你可以运行："
        echo "   ./build.sh       - 构建前端项目"
        echo "   ./install_server.sh - 安装完整服务器环境"
        echo "   ./preview.sh     - 启动前端预览"
        echo "   ./py_server.sh   - 启动Python后端服务器"
    else
        echo "❌ 设置权限失败"
        exit 1
    fi
}

# 主执行
make_scripts_executable