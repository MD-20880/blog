---
title: Ubuntu折腾记录
date: 2023-08-29 15:14:20
tags:
---


### 必要软件
这个软件列表是笔者安装自己的Ubuntu时会安装的所有软件
列表持续更新中……
```sh
==Softwares==
SogouPinyin  
Google Chrome   
Visual Studio Code   
neovim  
nvchad  
Picgo       #图床上传软件  
Logseq      #知识图库软件  
AppImageLauncher

==apt installs==

zsh
oh-my-zsh
tldr
fcitx
ffmpeg
libx11-dev
xserver-xorg-dev 
xorg-dev
xorg 
openbox
enpass
python3-opencv





== Fonts ==

AurulentSansMNerdFont



== build ==

virtualBox		#Virtual Environment
typst       		#latex like formatting
build-essential        	#Essential Tools
clang
cmake
vkpkg
git 
docker
rustlas


```
## nvchad
#### 效果
![](https://raw.githubusercontent.com/MD-20880/PicBed/master/picsoutput.gif)


#### 安装过程

```sh
#注意：在apt商店内下载的neovim版本较低，至少在0.9.0版本以上
sudo apt install -y neovim
#安装
git clone https://github.com/NvChad/NvChad ~/.config/nvim --depth 1 && nvim
```


## samba
#### 效果
允许局域网内设备文件互传，实现局域网内MACOS，WINDOWS，IPHONE等设备的文件同步

注意：苹果设备自带的文件管理器对smb传输并不友好，需要使用新的文件管理器，例如ES文件管理器等

#### 安装过程
```sh
sudo apt install samba #安装Samba

```

配置samba服务器
在```/etc/sambs/smb.conf```的最后，加入
```sh

[sharefolder]
   path = /home/damien/Public/share
   available = yes
   guest ok = no
   browseable = yes
   writable = yes
   valid users = damien
```
随后，对系统内的账户进行设置，你可以选择你当前使用的账户，或者自行新建一个账户
```sh
smbpasswd -a pswd #给SMB访问账号设置密码

/etc/init.d/smb restart
```
至此，linux端配置完成

若要连接到服务器，在linux中使用ifconfig指令可以查找本机IP地址，并在链接服务器时使用smb://IP_ADDRESS 进行连接即可。





## fcitx5 
#### 效果
允许使用各类输入法


#### 安装过程
直接上网下载搜狗输入法并直接使用```sudo apt install ./PATH_TO_SOGOU```安装.deb 文件即可，fcitx4会被自动安装

注意：Ficitx在安装时会被自动挂载到X11图形渲染模块下。
```sh
#若是以下指令输出Wayland，我们需要将X11的配置转移到Wayland下
echo $XDG_SESSION_TYPE 

#TODO: 这里需要找到对应写入文件，需要再查一下（）（）
GTK_IM_MODULE=fcitx
QT_IM_MODULE=fcitx
XMODIFIERS=@im=fcitx
```



## typst 
#### 效果
允许在本地有一个类似latex的强大formatter！
用来生成CV（逃

#### 安装过程
注意，不同的linux发布版有不同的发布渠道，在Ubuntu自带的apt中，没有对应的发布版本，因此我们通过rustup进行安装
```sh
#为Ubunutu安装RustUp
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

#安装Typst
cargo install --git https://github.com/typst/typst

```


## oh-my-posh
#### 效果
![](https://raw.githubusercontent.com/MD-20880/PicBed/master/picsScreenshot%20from%202023-09-03%2014-47-07.png)
#### 安装
首先，新建一个文件夹来存放二进制文件，并将该文件夹加入到PATH中去
随后运行
```sh 
curl -s https://ohmyposh.dev/install.sh | bash -s -- -d '你的文件夹'
```
此时，oh-my-posh就已经安装完成了。接下来我们对它进行配置

笔者使用的是zsh，所以就基于zsh来编写这个文档。当然，对于其他的shell来说配置过程也大同小异
将以下内容添加至~/.zshrc中
```sh 
eval "$(oh-my-posh init zsh)"
```
至此，就可以进行基本的使用了

#### 自定义
（目前笔者没有深入研究，简单带过）
想要使用网上看到的主题，我们需要上网找到主题对应的json文件
笔者使用的是clean-detailed主题，就以此为例子
```sh 
#下载json文件
wget https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/clean-detailed.omp.json "/你的文件目录/clean-detailed"
```
然后在~/.zshrc中，将原有的启动指令修改为

```sh 
eval "$(oh-my-posh init zsh --config '你的文件目录/clean-detailed')"
```
就可以使用主题了


## 基于Docker的Hexo部署 
详情参见
https://chunchengwei.github.io/ruan-jian/ji-yu-docker-de-hexo-bo-ke-da-jian/


## OBS直播推流
笔者有一台MACbook，还有一台装有Ubuntu的台式机作为本人的主力机。然而，本人看了一眼台式电脑单独配置摄像头的价格还是有些望而却步（尽管并不高，但对于目前没有稳定收入的我来说确实是没必要的设备）。因此，本人在想该怎样利用身边有的东西帮助自己整一个台式机用的摄像头。

简单的说一下历程，我自己身边有几台几近报废的华为手机，还有一个已经被我拆开来的旧笔记本电脑。首先想到的是能不能利用华为的“超高清”摄像头来制作一个电脑摄像头。可惜华为Mate20 Pro用的是莱卡摄像头，并没有查到需要应用摄像头所需要的（好像是MIPI）转换板，在MATE20的开源资料中也没有反向查到莱卡相机相关的驱动程序相关代码，也只好作罢。而电脑屏幕又不是很想拆掉，打算改吧改吧做成移动屏幕，所以也没遭受我的毒手。

所以我想到的是利用MACbook的摄像头，利用OBS推流到到我的Ubuntu电脑中。使用v4l2loopback module生成虚拟摄像头，最后再使用ffmpeg拉流推送到虚拟摄像头中，达成效果。

首先在mac上使用Docker (Docker万岁) 部署rtmp服务器

```sh
#以下安装作为例子，实际安装详情请查看https://hub.docker.com/r/alqutami/rtmp-hls

#注意防火墙放行1935 和 8080 端口， MAC默认不自带防火墙
docker pull alfg/nginx-rtmp
docker run -it -p 1935:1935 -p 8080:80 --rm nginx-rtmp

```
随后在OBS中设置推流地址为 rtmp://本机ip:1935/stream

点击开始推流后，我们打开https://localhost:8080/static 检查rtmp服务器推流信息， 可以看到已经有多个不同分辨率的推流正在进行
![](https://ask.qcloudimg.com/http-save/yehe-6945550/8a4fddca882c25a0daedb68b6c73cc6e.jpeg)

此时，在同一个局域网内的机器已经可以通过使用拉流软件(ffmpeg,vlc)播放画面了
使用拉流软件访问 
<a href=rtmp://机器ip:1935/stream>rtmp://机器ip:1935/stream</a>即可看到视频画面

![](https://raw.githubusercontent.com/MD-20880/PicBed/master/picsScreenshot%20from%202023-09-07%2019-13-55.png)

```sh
#使用ffplay进行播放
ffplay rtmp://机器ip:1935/stream
```
在使用FFplay进行播放时，需要SDL库的正确安装，SDL2的安装将会在之后进行单独介绍

## 各类小问题




### WAYLAND ? X11
笔者在折腾的时候，对于Linux整体架构的理解并不深刻，导致很多的操作是知其然而不知其所以然。
看到了一个帖子，很清晰地描述了Linux gui相关的各个名词以及之间的相互关联，特此引用一下，帮助自己理解记忆，同时艾特一下膜拜一下大佬
原贴是<a href=https://keyou.github.io/blog/2018/12/18/Linux%E7%B3%BB%E7%BB%9FGUI%E5%90%AF%E5%8A%A8%E6%B5%81%E7%A8%8B/>柯幽的博客</a>。各位可以围观一下
![](https://raw.githubusercontent.com/MD-20880/PicBed/master/picsScreenshot%20from%202023-09-07%2019-20-59.png)



TO BE CONTINUE

