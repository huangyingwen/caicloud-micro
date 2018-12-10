import * as IcoPath from "../icoPath";

const data = {
  user_center: {
    group: i18n.get("nav.group.userCenter"),
    children: {
      users: {
        text: i18n.get("nav.user.users"),
        mod: "user_manage",
        to: "/user-web/users",
        icoPath: IcoPath.userManagement
      },
      teams: {
        text: i18n.get("nav.user.teams.managerView"),
        mod: "user_group",
        to: "/user-web/teams",
        icoPath: IcoPath.user_group
      },
      // my_teams: {
      //   text: i18n.get("nav.user.myGroup"),
      //   mod: "user_my_group",
      //   to: "/teams/my-teams",
      //   icoPath: IcoPath.user_group
      // },
      profile: {
        text: i18n.get("nav.user.profile"),
        to: "/user-web/profile",
        icoPath: IcoPath.user
      }
    }
  },
  application_center: {
    group: i18n.get("nav.group.app"),
    mod: "application_center",
    children: {
      partition: {
        text: i18n.get("nav.app.partition"),
        mod: "app_partition",
        icoPath: IcoPath.partition,
        to: "/partition"
      },
      application: {
        text: "应用管理",
        mod: "app_name",
        icoPath: IcoPath.application,
        children: {
          application: {
            text: "应用",
            to: "/application"
          },
          application_deployment: {
            text: i18n.get("nav.app.deployment"),
            to: "/deployment"
          },
          // NOTE: 左侧菜单 - 有状态应用，线上暂时隐藏， 只在本地开发时放开
          application_statefulsets: {
            text: i18n.get("nav.statefulsets.name"),
            to: "/statefulsets"
          },
          application_job: {
            text: i18n.get("nav.job.name"),
            to: "/job"
          },
          app1react: {
            text: "App 1 (React.16.4.1)",
            to: "/app1"
          },

          app2react: {
            text: "App 2 (React.16.6.3)",
            to: "/app2"
          },
          app4vue: {
            text: "App 4 (Vue)",
            to: "/app4"
          }
        }
      },
      application_store: {
        text: i18n.get("nav.app.store"),
        mod: "app_store",
        icoPath: IcoPath.app_store,
        to: "/appStore"
      },
      application_space: {
        text: i18n.get("nav.app.orchestration"),
        mod: "chart_group",
        icoPath: IcoPath.application_chart,
        children: {
          application_chartGroup: {
            text: i18n.get("nav.app.chartGroup"),
            to: "/applicationChartGroup"
          },
          application_chart: {
            text: i18n.get("nav.app.chart"),
            to: "/applicationChart"
          },
          service_chart: {
            text: "服务模板",
            to: "/serviceChart"
          }
        }
      },
      storage: {
        text: "存储管理",
        icoPath: IcoPath.storage_volume,
        children: {
          storage_volume: {
            text: i18n.get("nav.storage.volume"),
            mod: "storage_volume",
            to: "/storage/volumes"
          },
          storage_snapshot: {
            text: "快照",
            to: "/storage/snapshot"
          }
        }
      },
      loadbalancer: {
        text: i18n.get("nav.lb"),
        mod: "loadbalancer",
        icoPath: IcoPath.loadBalancer,
        to: "/loadbalancer"
      },
      config_center: {
        text: i18n.get("nav.config"),
        icoPath: IcoPath.config,
        children: {
          config_group: {
            text: i18n.get("nav.configCenter.group"),
            to: "/configCenter/group"
          },
          configs: {
            text: i18n.get("nav.configCenter.config"),
            to: "/configCenter/config"
          }
        }
      }
    }
  }
};

export default data;
