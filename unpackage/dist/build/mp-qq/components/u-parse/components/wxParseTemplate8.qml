<view><block qq:if="{{node.node=='element'}}"><block><block qq:if="{{node.tag=='button'}}"><block><button type="default" size="mini"><block qq:for="{{node.nodes}}" qq:for-item="node" qq:for-index="index" qq:key="index"><block><weixin-parse-template vue-id="{{'309f52d0-1-'+index}}" node="{{node}}" bind:__l="__l"></weixin-parse-template></block></block></button></block></block><block qq:else><block qq:if="{{node.tag=='li'}}"><block><view class="{{[node.classStr]}}" style="{{(node.styleStr)}}"><block qq:for="{{node.nodes}}" qq:for-item="node" qq:for-index="index" qq:key="index"><block><weixin-parse-template vue-id="{{'309f52d0-2-'+index}}" node="{{node}}" bind:__l="__l"></weixin-parse-template></block></block></view></block></block><block qq:else><block qq:if="{{node.tag=='video'}}"><block><weixin-parse-video vue-id="309f52d0-3" node="{{node}}" bind:__l="__l"></weixin-parse-video></block></block><block qq:else><block qq:if="{{node.tag=='audio'}}"><block><weixin-parse-audio vue-id="309f52d0-4" node="{{node}}" bind:__l="__l"></weixin-parse-audio></block></block><block qq:else><block qq:if="{{node.tag=='img'}}"><block><weixin-parse-img vue-id="309f52d0-5" node="{{node}}" bind:__l="__l"></weixin-parse-img></block></block><block qq:else><block qq:if="{{node.tag=='a'}}"><block><view class="{{[node.classStr]}}" style="{{(node.styleStr)}}" data-href="{{node.attr.href}}" data-event-opts="{{[['tap',[['wxParseATap',['$event']]]]]}}" bindtap="__e"><block qq:for="{{node.nodes}}" qq:for-item="node" qq:for-index="index" qq:key="index"><block><weixin-parse-template vue-id="{{'309f52d0-6-'+index}}" node="{{node}}" bind:__l="__l"></weixin-parse-template></block></block></view></block></block><block qq:else><block qq:if="{{node.tag=='br'}}"><block><text>\n</text></block></block><block qq:else><block><view class="{{[node.classStr]}}" style="{{(node.styleStr)}}"><block qq:for="{{node.nodes}}" qq:for-item="node" qq:for-index="index" qq:key="index"><block><weixin-parse-template vue-id="{{'309f52d0-7-'+index}}" node="{{node}}" bind:__l="__l"></weixin-parse-template></block></block></view></block></block></block></block></block></block></block></block></block></block><block qq:else><block qq:if="{{node.node=='text'}}"><block>{{node.text}}</block></block></block></view>