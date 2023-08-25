import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as a,c as t,a as n,b as i,d as s,f as l}from"./app-38f4aacd.js";const v={},u=n("h1",{id:"_5月刷题笔记",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_5月刷题笔记","aria-hidden":"true"},"#"),i(" 5月刷题笔记")],-1),m={id:"有序数组的平方",tabindex:"-1"},c=n("a",{class:"header-anchor",href:"#有序数组的平方","aria-hidden":"true"},"#",-1),b={href:"https://leetcode.cn/problems/squares-of-a-sorted-array/",target:"_blank",rel:"noopener noreferrer"},h=l('<p>给你一个按 <em>非递减顺序</em> 排序的整数数组 nums，返回 <em>每个数字的平方</em> 组成的新数组，要求也按 <em>非递减顺序</em> 排序。</p><h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h3><hr><h4 id="_1-对负数取反后再排序" tabindex="-1"><a class="header-anchor" href="#_1-对负数取反后再排序" aria-hidden="true">#</a> 1. 对负数取反后再排序</h4><h4 id="_3-双指针" tabindex="-1"><a class="header-anchor" href="#_3-双指针" aria-hidden="true">#</a> 3. 双指针</h4><ul><li>中间开始 双指针从中间往两端走</li><li>两端开始 从最左最右开始走</li></ul>',6),o={id:"颜色分类",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#颜色分类","aria-hidden":"true"},"#",-1),p={href:"https://leetcode.cn/problems/sort-colors/",target:"_blank",rel:"noopener noreferrer"},f=l('<p>给定一个包含红色、白色和蓝色、共n 个元素的数组nums，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。</p><p>我们使用整数 0、1 和 2 分别表示红色、白色和蓝色。</p><p>必须在不使用库的sort函数的情况下解决这个问题。</p><h3 id="解决方法-1" tabindex="-1"><a class="header-anchor" href="#解决方法-1" aria-hidden="true">#</a> 解决方法</h3><hr><h4 id="_1-单指针" tabindex="-1"><a class="header-anchor" href="#_1-单指针" aria-hidden="true">#</a> 1. 单指针</h4><p>先将所有0元素插到最前方，再将所有1元素插入到0元素后</p><h4 id="_2-双指针" tabindex="-1"><a class="header-anchor" href="#_2-双指针" aria-hidden="true">#</a> 2. 双指针</h4><ul><li>p0 p1<br> 对0与1进行排序</li><li>p0 p2<br> 对0与2进行排序</li></ul>',9),_={id:"三数之和",tabindex:"-1"},x=n("a",{class:"header-anchor",href:"#三数之和","aria-hidden":"true"},"#",-1),j={href:"https://leetcode.cn/problems/3sum/",target:"_blank",rel:"noopener noreferrer"},L=l(`<p>给你一个包含 n 个整数的数组nums，判断nums中是否存在三个元素 a，b，c ，使得<br> a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。</p><p>注意：答案中不可以包含重复的三元组。</p><h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h3><p>一层循环确定第一个元素，双指针确定其他两个元素，过滤掉无解的情况：</p><ul><li>最小和都大于target</li><li>最大和都小于targer</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
    public List&lt;List&lt;Integer&gt;&gt; threeSum(int[] nums) {
        if(nums==null||nums.length&lt;3){
            return new ArrayList&lt;&gt;();
        }
        int len=nums.length;
        // 排序
        Arrays.sort(nums);
        List&lt;List&lt;Integer&gt;&gt; result = new ArrayList&lt;&gt;();

        // 遍历选取第一个元素
        for(int i=0; i&lt;len-2; i++){
            // 去掉重复情况
            if(i&gt;0&amp;&amp;nums[i]==nums[i-1]){
                continue;
            }

            // 去掉必无解的情况
            // 最小和已经大于0
            if(nums[i]+nums[i+1]+nums[i+2]&gt;0){
                break;
            }
            // 最大和也小于0
            if(nums[i]+nums[len-1]+nums[len-2]&lt;0){
                continue;
            }

            // 双指针选取另外两个元素
            int left=i+1, right=len-1;
            while(left&lt;right){
                int sum=nums[i]+nums[left]+nums[right];
                // 满足条件，加入
                if(sum==0){
                    result.add(Arrays.asList(nums[i], nums[left], nums[right]));

                    // 移动指针，并去掉重复情况
                    left++;
                    right--;
                    while(left&lt;right&amp;&amp;nums[left]==nums[left-1]){
                        left++;
                    }
                    while(left&lt;right&amp;&amp;nums[right]==nums[right+1]){
                        right--;
                    }
                }
                // 小于0
                else if(sum&lt;0){
                    left++;
                }
                else{
                    right--;
                }
            }
        }
        return result;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),k={id:"四数之和",tabindex:"-1"},A=n("a",{class:"header-anchor",href:"#四数之和","aria-hidden":"true"},"#",-1),w={href:"https://leetcode.cn/problems/4sum/",target:"_blank",rel:"noopener noreferrer"},S=l(`<p>给你一个由 n 个整数组成的数组nums ，和一个目标值 target 。请你找<br> 出并返回满足下述全部条件且不重复的四元组[nums[a], nums[b], nums[c], nums[d]]<br> （若两个四元组元素一一对应，则认为两个四元组重复）：</p><p>0 &lt;= a, b, c, d&lt; n a、b、c 和 d 互不相同 nums[a] + nums[b] + nums[c] + nums[d] == target 你可以按 任意顺序 返回答案 。</p><h3 id="解决方案-1" tabindex="-1"><a class="header-anchor" href="#解决方案-1" aria-hidden="true">#</a> 解决方案</h3><p>两层循环确定前两个元素，双指针确定其他两个元素，过滤掉无解情况<br> 与三数之和类似</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
    public List&lt;List&lt;Integer&gt;&gt; fourSum(int[] nums, int target) {
        if(nums.length&lt;4){
            return new ArrayList&lt;&gt;();
        }
        List&lt;List&lt;Integer&gt;&gt; result = new ArrayList&lt;&gt;();
        // 先进行排序
        Arrays.sort(nums);
        int len=nums.length;
        // 加法判断时间溢出
        // 第一重循环确定第一个元素
        for(int i=0; i&lt;len-3; i++){
            // 如果与前一个元素值一样，则跳过，避免重复
            if(i&gt;0&amp;&amp;nums[i]==nums[i-1]){
                continue;
            }

            // 最小的和已经超过target
            if((long)nums[i]+nums[i+1]+nums[i+2]+nums[i+3]&gt;target){
                break;
            }
            // 最大的和也不会超过target
            if((long)nums[i]+nums[len-1]+nums[len-2]+nums[len-3]&lt;target){
                continue;
            }
            

            // 第二重循环确定第二个元素
            for(int j=i+1; j&lt;len-2; j++){
                // 如果与前一个元素值重复，跳过
                if(j&gt;i+1&amp;&amp;nums[j]==nums[j-1]){
                    continue;
                }
                // 过滤一些必然无解的情况
                // 最小的和已经超过target
                if((long)nums[i]+nums[j]+nums[j+1]+nums[j+2]&gt;target){
                    break;
                }
                // 最大的和也不会超过target
                if((long)nums[i]+nums[len-1]+nums[len-2]+nums[j]&lt;target){
                    continue;
                }

                // 双指针求解，从两侧开始
                int left=j+1, right=len-1;
                while(left&lt;right){
                    int sum=nums[i]+nums[j]+nums[left]+nums[right];
                    // 满足情况，加入
                    if(sum==target){
                        // Arrays.asList快速新建List
                        result.add(Arrays.asList(nums[i], nums[j], nums[left], nums[right]));

                        // 去除重复情况
                        while(left&lt;right&amp;&amp;nums[left]==nums[left+1]){
                            left++;
                        }
                        left++;
                        while(left&lt;right&amp;&amp;nums[right]==nums[right-1]){
                            right--;
                        }
                        right--;
                    }
                    // 不满足情况，left++
                    else if(sum&lt;target){
                        left++;
                    }
                    // right--
                    else if(sum&gt;target){
                        right--;
                    }
                }
            }
        }
        return result;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),y={id:"两个数组的交集",tabindex:"-1"},I=n("a",{class:"header-anchor",href:"#两个数组的交集","aria-hidden":"true"},"#",-1),V={href:"https://leetcode.cn/problems/intersection-of-two-arrays/",target:"_blank",rel:"noopener noreferrer"},N=l(`<p>给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。</p><h3 id="解决方案-2" tabindex="-1"><a class="header-anchor" href="#解决方案-2" aria-hidden="true">#</a> 解决方案</h3><hr><h4 id="排序双指针" tabindex="-1"><a class="header-anchor" href="#排序双指针" aria-hidden="true">#</a> 排序双指针</h4><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        List&lt;Integer&gt; temp = new ArrayList&lt;&gt;();
        // 对数组进行排序
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        // 双指针选取交集
        int i=0, j=0;
        int lenS1=nums1.length, lenS2=nums2.length;
        while(i&lt;lenS1&amp;&amp;j&lt;lenS2){
            // 去除重复情况
            while(i&gt;0&amp;&amp;i&lt;lenS1&amp;&amp;nums1[i]==nums1[i-1]){
                i++;
            }
            while(j&gt;0&amp;&amp;j&lt;lenS2&amp;&amp;nums2[j]==nums2[j-1]){
                j++;
            }
            if(i&gt;=lenS1||j&gt;=lenS2){
                break;
            }
            // 交集加入
            if(nums1[i]==nums2[j]){
                temp.add(nums1[i]);

                // 指针移动
                i++;
                j++;
            }
            // nums1较小
            else if(nums1[i]&lt;nums2[j]){
                i++;
            }
            else{
                j++;
            }
        }
        int[] result = new int[temp.size()];
        for(int k=0; k&lt;temp.size(); k++){
            result[k]=temp.get(k);
        }
        return result;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> Set</h4>`,6);function B(E,J){const e=r("ExternalLinkIcon");return a(),t("div",null,[u,n("h2",m,[c,i(),n("a",b,[i("有序数组的平方"),s(e)])]),h,n("h2",o,[g,i(),n("a",p,[i("颜色分类"),s(e)])]),f,n("h2",_,[x,i(),n("a",j,[i("三数之和"),s(e)])]),L,n("h2",k,[A,i(),n("a",w,[i("四数之和"),s(e)])]),S,n("h2",y,[I,i(),n("a",V,[i("两个数组的交集"),s(e)])]),N])}const C=d(v,[["render",B],["__file","note2205.html.vue"]]);export{C as default};
