<template>
  <el-dialog :visible="detailDialogOpen" :before-close="handleClose" center @open="updateMovie">
    <div class="dialog-body">
      <div class="brief-area">
        <div class="img-area">
          <img :src="movie.picurl" class="movie-img">
        </div>
        <div class="info-area">
          <div class="movie-title-area">
            <span class="movie-title">{{movie.title}}</span>
            <span class="movie-year">({{movie.year}})</span>
          </div>
          <el-rate disabled show-score :max=5
                   :colors="['#409EFF', '#409EFF', '#409EFF']"
                   text-color="#409EFF"
                   :score-template="ratingValue" v-model="movie.rating / 2" class="movie-rating"></el-rate>
          <div class="movie-detail-area">
            <span class="movie-detail-title">类型</span>
            <span>{{movie.genre}}</span>
          </div>
          <div class="movie-detail-area">
            <span class="movie-detail-title">导演</span>
            <span>{{directors}}</span>
          </div>
          <div class="movie-detail-area">
            <span class="movie-detail-title">主演</span>
            <span>{{starring}}</span>
          </div>
        </div>
      </div>
      <div class="summary-area">
        <div class="summary-title-area">
          <div class="square"></div>
          <span class="summary-title">简介</span>
        </div>
        <p class="summary-content">{{movie.summary}}</p>
        <div class="summary-title-area">
          <div class="square"></div>
          <span class="summary-title">推荐理由</span>
        </div>
        <p class="summary-content">{{movie.explanation}}</p>
        <div class="summary-title-area">
          <div class="square"></div>
          <span class="summary-title">可视化</span>
        </div>
        <charts :options="graphData"></charts>
      </div>
    </div>
  </el-dialog>
</template>

<script>
  import ECharts from 'vue-echarts/components/ECharts'
  import 'echarts/lib/chart/graph'
  import 'echarts/lib/component/tooltip'

  export default {
    name: "DetailPage",
    data() {
      return {
        movie: {
          country: '',
          directors: '',
          starring: '',
          genre: '',
          mid: '',
          picurl: '',
          rating: '',
          subtype: '',
          summary: '',
          title: '',
          year: '',
          explanation: '',
          entity_data: [
            {
              name: '1'
            },
            {
              name: '2'
            },
            {
              name: '3'
            }
          ],
          relation: [
            {
              name: '1',
              source: '1',
              target: '2'
            },
            {
              name: '2',
              source: '2',
              target: '3'
            }
          ]
        },
        graphData: {
          tooltip: {},
          animation: true,
          series : [
            {
              type: 'graph',
              layout: 'force',
              symbolSize: 50,
              label: {
                normal:{
                  show: true
                }
              },
              data: [
                {
                  name: '1'
                },
                {
                  name: '2'
                },
                {
                  name: '3'
                }
              ],
              links: [
                {
                  name: '1',
                  source: '1',
                  target: '2'
                },
                {
                  name: '2',
                  source: '2',
                  target: '3'
                }
              ],
              force: {
                repulsion: 1000,
                edgeLength: 120
              },
              itemStyle: {
                color: '#409EFF'
              }
            }
          ]
        }
      }
    },
    props: {
      detailDialogOpen: {
        type: Boolean
      },
      movieDetail: {
        type: Object
      }
    },
    components: {
      'charts': ECharts
    },
    computed: {
      ratingValue: function () {
        return this.movie.rating.toString()
      },
      starring: function () {
        return this.movie.starring.replace(new RegExp(',', 'g'), ' \\ ')
      },
      directors: function() {
        return this.movie.directors.replace(new RegExp(',', 'g'), ' \\ ')
      }
    },
    methods: {
      updateMovie() {
        this.movie = JSON.parse(JSON.stringify(this.movieDetail))
        this.graphData.series[0].data = this.movie.entity_data
        this.graphData.series[0].links = this.movie.relation
        console.log(this.movie)
      },
      handleClose(done) {
        this.$emit('update:detailDialogOpen', false)
        done()
      }
    }
  }
</script>

<style scoped>
  .brief-area {
    display: flex;
  }

  .movie-img {
    height: 240px;
  }

  .info-area {
    margin-left: 20px;
  }

  .movie-title-area {
    display: flex;
    align-items: flex-end;
    margin-bottom: 20px;
  }

  .movie-rating {
    margin-bottom: 30px;
  }

  .movie-detail-area {
    display: flex;
    color: dimgray;
    line-height: 20px;
    margin-top: 12px;
    font-size: 16px;
  }

  .movie-detail-title {
    display: inline-block;;
    margin-right: 20px;
    min-width: 36px;
  }

  .movie-title {
    font-size: 24px;
  }

  .movie-year {
    font-size: 16px;
    margin-left: 10px;
    margin-bottom: 2px;
  }

  .summary-title-area {
    display: flex;
    height: 30px;
    text-align: left;
    color: #409EFF;
    font-size: 18px;
    line-height: 30px;
    margin: 20px auto;
  }

  .summary-title {
    margin-left: 10px;
  }

  .summary-content {
    font-size: 14px;
    line-height: 22px;
    text-indent: 2em;

  }

  .square {
    width: 10px;
    height: 30px;
    background-color: #409EFF;
  }

</style>
